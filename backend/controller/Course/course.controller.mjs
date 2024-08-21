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
