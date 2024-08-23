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
  const { moduleNames } = req.body; // Expecting an array of module names

  // Check if moduleNames is provided and is an array
  if (!moduleNames || !Array.isArray(moduleNames) || moduleNames.length === 0) {
    return res.json({
      message: "moduleNames is mandatory and should be an array",
    });
  }

  // Prepare the SQL query for inserting multiple module names
  const addModules = `INSERT INTO modules (modulename) VALUES ?`;

  // Create the values array for batch insertion
  const values = moduleNames.map((name) => [name]);

  try {
    db.query(addModules, [values], (err, result) => {
      if (err) {
        console.log("db_error", err);
        return res.json({ message: "db_error" });
      } else {
        res.status(200).json({ message: "modules added successfully" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "catch_error" });
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
  const pageValues = [
    courseId,
    moduleId,
    description,
    content
  ];

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
          return res
            .json({ error: "Failed to insert activity data" });
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
