import db from "../../config/db.config.mjs";
import transporter from "../../config/email.config.mjs";
import path from "path";

export const addCourse = (req, res) => {
  const {
    courseFullName,
    courseShortName,
    courseStartDate,
    courseEndDate,
    courseDescription,
    selectedCategories, // This is logged but not used in insert
  } = req.body;

  try {
    // Handle file upload
    const courseImage = req.file
      ? path.join("/uploads", req.file.filename)
      : "default_image.jpg";

    // Basic validation
    if (
      !courseFullName ||
      !courseShortName ||
      !courseStartDate ||
      !courseEndDate ||
      !courseImage ||
      !courseDescription
    ) {
      return res.json({ message: "All fields are required." });
    }

    // Insert the new course into the courses table
    db.query(
      `INSERT INTO courses (coursename, course_short_name, course_start_date, course_end_date, course_image, course_desc, course_category_id) 
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        courseFullName,
        courseShortName,
        courseStartDate,
        courseEndDate,
        courseImage,
        courseDescription,
        selectedCategories,
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting course:", err);
          return res.status(500).json({ message: "Error inserting course" });
        }

        // Successful response
        res.status(200).json({ message: "Course added successfully" });
      }
    );
  } catch (err) {
    res.json({ message: "catch error" });
  }
};

export const addModule = (req, res) => {
  const {
    moduleNames,
    path: modulePath,
    parentModule,
    selectedModuleId,
  } = req.body;
  const moduleImage = req.file; // Get the uploaded file

  // Parse moduleNames string to an array if it's a string
  let modules;
  try {
    modules = JSON.parse(moduleNames);
  } catch (error) {
    return res.status(400).json({ message: "Invalid moduleNames format" });
  }

  // Validate the parsed array
  if (!Array.isArray(modules) || modules.length === 0) {
    return res.json({
      message: "moduleNames is mandatory and should be an array",
    });
  }

  // Prepare the full file path or null if no file was uploaded
  const moduleImagePath = moduleImage
    ? path.join("/uploads", moduleImage.filename)
    : null;

  // Insert multiple module names into the modules table
  const addModulesQuery = `INSERT INTO modules (modulename, courseid, module_image) VALUES ?`;
  const moduleValues = modules.map((name) => [
    name,
    selectedModuleId,
    moduleImagePath, // Save the full file path in the database
  ]);

  db.query(addModulesQuery, [moduleValues], (err, result) => {
    if (err) {
      console.log("db_error", err);
      return res.json({ message: "db_error" });
    }

    // Retrieve the first inserted module ID
    const moduleIdStart = result.insertId;
    const numInsertedModules = modules.length;
    const insertedModuleIds = Array.from(
      { length: numInsertedModules },
      (_, i) => moduleIdStart + i
    );

    // Determine the effective parent module and course category ID
    const effectiveParentModule = parentModule || selectedModuleId;

    // Fetch the course_category_id and parent module path using a JOIN query
    const fetchCourseCategoryAndPathQuery = `
      SELECT c.course_category_id, ctx.path as parentPath
      FROM courses c
      LEFT JOIN context ctx ON ctx.instanceid = ?
      WHERE c.courseid = ?`;

    db.query(
      fetchCourseCategoryAndPathQuery,
      [effectiveParentModule, effectiveParentModule],
      (fetchErr, fetchResult) => {
        if (fetchErr) {
          console.log("fetch_error", fetchErr);
          return res.json({ message: "fetch_error" });
        }

        if (fetchResult.length === 0) {
          return res.json({ message: "effectiveParentModule not found" });
        }

        const { course_category_id, parentPath } = fetchResult[0];
        const pathPrefix = `${course_category_id}/${selectedModuleId}`;

        // Check existing depth under the current parent module
        const checkExistingDepthQuery = `
          SELECT depth 
          FROM context 
          WHERE contextlevel = 5 AND path = ? 
          ORDER BY depth DESC LIMIT 1`;

        db.query(
          checkExistingDepthQuery,
          [pathPrefix],
          (checkErr, checkResult) => {
            if (checkErr) {
              console.log("check_error", checkErr);
              return res.json({ message: "check_error" });
            }

            let newDepth;

            if (checkResult.length > 0) {
              const lastDepth = checkResult[0].depth;
              const depthSegments = lastDepth.split("/").map(Number);
              const lastSegment = depthSegments.pop();

              // Increment the last segment to generate the new depth
              newDepth = [...depthSegments, lastSegment + 1].join("/");
            } else {
              // If no existing depth, start with '0/1'
              newDepth = `0/1`;
            }

            // Prepare context data with the computed depth
            const addContextQuery = `INSERT INTO context (contextlevel, instanceid, path, depth) VALUES ?`;
            const contextValues = insertedModuleIds.map((moduleId) => [
              5, // Context level for modules
              moduleId,
              pathPrefix, // Path based on course_category_id and selectedModuleId
              newDepth, // Computed depth like '0/1'
            ]);

            // Insert context data into the context table
            db.query(
              addContextQuery,
              [contextValues],
              (contextErr, contextResult) => {
                if (contextErr) {
                  console.log("context_error", contextErr);
                  return res.json({ message: "context_error" });
                }

                res.status(200).json({ message: "modules added successfully" });
              }
            );
          }
        );
      }
    );
  });
};

export const getModuleByCourseId = async (req, res) => {
  const { courseId } = req.params;

  try {
    db.query(
      `
      SELECT * FROM modules WHERE courseid = ?
    `,
      [courseId],
      (err, result) => {
        if (err) {
          res.json({ message: "db_error" });
        } else {
          res.status(200).json(result);
        }
      }
    );
  } catch (error) {
    console.error("Error fetching modules:", error);
    res.status(500).json({ message: "Error fetching modules" });
  }
};

export const getCourse = (req, res) => {
  const getCourses = `select * from courses`;

  db.query(getCourses, (err, result) => {
    if (err) {
      res.json({ message: "db_error" });
    } else {
      res.status(200).json({ result });
    }
  });
};

export const getModule = (req, res) => {
  const getModule = `select * from modules`;

  db.query(getModule, (err, result) => {
    if (err) {
      res.json({ message: "db_error" });
    } else {
      res.status(200).json({ result });
    }
  });
};

export const submitCourseContent = (req, res) => {
  const {
    courseId,
    moduleId,
    submoduleId,
    description,
    content,
    availableFrom,
    availableUntil,
    completionCriteria,
    groupMode,
    course_category_id,
  } = req.body;

  const image = req.file ? req.file.path : null;

  console.log({
    courseId,
    moduleId,
    description,
    content,
    availableFrom,
    availableUntil,
    completionCriteria,
    groupMode,
    course_category_id,
    image,
  });

  // Inserting into the `pages` table
  const insertPageQuery = `
      INSERT INTO pages (courseid, moduleid, description, page_content)
      VALUES (?, ?, ?, ?)
  `;
  const pageValues = [courseId, moduleId, description, content];

  db.query(insertPageQuery, pageValues, (err, result) => {
    if (err) {
      console.error("Error inserting into pages:", err);
      return res.json({ error: "Failed to insert page data" });
    }

    const pageId = result.insertId;

    // Construct the path for the context table
    const path = `${course_category_id}/${courseId}`;

    // Inserting into the `context` table
    const insertContextQuery = `
          INSERT INTO context (instanceid, path, contextlevel)
          VALUES (?, ?, ?)
      `;
    const contextValues = [courseId, path, 3];

    db.query(insertContextQuery, contextValues, (err, result) => {
      if (err) {
        console.error("Error inserting into context:", err);
        return res.json({ error: "Failed to insert context data" });
      }

      const contextId = result.insertId;

      // Inserting into the `activity` table
      const insertActivityQuery = `
              INSERT INTO activity (pageid, context_id, available_from, available_until, completion_criteria, group_mode)
              VALUES (?, ?, ?, ?, ?, ?)
          `;
      const activityValues = [
        pageId,
        contextId,
        availableFrom,
        availableUntil,
        completionCriteria,
        groupMode,
      ];

      db.query(insertActivityQuery, activityValues, (err, result) => {
        if (err) {
          console.error("Error inserting into activity:", err);
          return res.json({ error: "Failed to insert activity data" });
        }

        res.status(200).json({
          message: "Content submitted successfully",
          pageId,
          contextId,
          activityId: result.insertId,
        });
      });
    });
  });
};

export const getStructuredData = (req, res) => {
  // Fetch all courses
  db.query("SELECT * FROM courses", (error, courses) => {
    if (error) {
      console.error("Error fetching courses:", error);
      return res.status(500).json({ error: "Failed to fetch courses" });
    }

    // Fetch all modules
    db.query("SELECT * FROM modules", (error, modules) => {
      if (error) {
        console.error("Error fetching modules:", error);
        return res.status(500).json({ error: "Failed to fetch modules" });
      }

      // Fetch all context entries
      db.query("SELECT * FROM context", (error, contexts) => {
        if (error) {
          console.error("Error fetching contexts:", error);
          return res.status(500).json({ error: "Failed to fetch contexts" });
        }

        // Create a map of courses with their IDs and names
        const courseMap = new Map();
        courses.forEach((course) => {
          courseMap.set(course.courseid, {
            label: course.coursename,
            value: `${course.courseid}`,
            children: [],
          });
        });

        // Create a map of modules with their IDs and names
        const moduleMap = new Map();
        modules.forEach((module) => {
          moduleMap.set(module.moduleid, {
            label: module.modulename,
            value: `${module.moduleid}`,
            children: [],
          });
        });

        // Create a function to build the hierarchy
        const buildHierarchy = (contextEntries) => {
          const hierarchyMap = new Map(); // To store intermediate nodes

          contextEntries.forEach((context) => {
            const { contextlevel, instanceid, path, depth } = context;

            // Split path and depth
            const pathSegments = path ? path.split("/").filter(Boolean) : [];
            const depthSegments = depth ? depth.split("/").filter(Boolean) : [];

            if (contextlevel === 3) {
              // Course level
              if (!courseMap.has(instanceid)) {
                courseMap.set(instanceid, {
                  label: `Course ${instanceid}`,
                  value: `${instanceid}`,
                  children: [],
                });
              }
              hierarchyMap.set(instanceid, courseMap.get(instanceid));
            } else if (contextlevel === 5) {
              // Module level
              const courseId = pathSegments[1]; // Extract course ID from the path

              if (courseMap.has(courseId)) {
                let currentLevel = courseMap.get(courseId);

                depthSegments.forEach((segment, index) => {
                  let childNode = currentLevel.children.find(
                    (child) => child.value === segment
                  );

                  if (!childNode) {
                    childNode = {
                      label:
                        index === depthSegments.length - 1
                          ? moduleMap.get(instanceid)?.label ||
                            `Module ${instanceid}`
                          : `Module ${segment}`,
                      value: segment,
                      children: [],
                    };
                    currentLevel.children.push(childNode);
                  }

                  currentLevel = childNode;
                });

                // Add the module as a child if it's at the final depth
                if (moduleMap.has(instanceid) && depthSegments.length === 0) {
                  currentLevel.children.push({
                    label: moduleMap.get(instanceid).label,
                    value: `${instanceid}`,
                    children: [],
                  });
                }
              }
            }
          });

          return Array.from(courseMap.values());
        };

        // Build the hierarchical data
        const structuredData = buildHierarchy(contexts);

        // Send the final structured data
        res.status(200).json(structuredData);
      });
    });
  });
};
