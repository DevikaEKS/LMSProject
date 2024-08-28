import express from "express";
import upload from "../../middleware/fileUpload.mjs";
import {
  addCourse,
  addModule,
  getCourse,
  getModule,
  getModuleByCourseId,
  getStructuredData,
  submitCourseContent,
} from "../../controller/Course/course.controller.mjs";
const router = express.Router();

router.post("/addcourse", upload.single("courseImage"), addCourse);
router.post("/addmodule", upload.single("moduleImage"), addModule);
router.get("/getcourse", getCourse);
router.get("/getmodule", getModule);
router.get("/getmodule/:courseId", getModuleByCourseId);
router.post("/submitcon", upload.single("image"), submitCourseContent);
router.get("/structured-data", getStructuredData);

export default router;
