import express from "express";
import upload from "../../middleware/fileUpload.mjs";
import {
  addCourse,
  addModule,
  getCourse,
  getModule,
  submitCourseContent
} from "../../controller/Course/course.controller.mjs";
const router = express.Router();

router.post("/addcourse", upload.single("courseImage"), addCourse);
router.post("/addmodule", addModule);
router.get("/getcourse", getCourse);
router.get("/getmodule", getModule);
router.post("/submitcontent", submitCourseContent);

export default router;
