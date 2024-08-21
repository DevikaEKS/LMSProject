import express from "express";
import upload from "../../middleware/fileUpload.mjs";
import { addCourse } from "../../controller/Course/course.controller.mjs";
const router = express.Router();

router.post("/addcourse", upload.single("courseImage"), addCourse);

export default router;