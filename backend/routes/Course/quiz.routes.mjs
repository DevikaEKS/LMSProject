import express from "express";
import { addQuiz } from "../../controller/Course/quiz.controller.mjs";
const router = express.Router();

router.post("/addquiz", addQuiz);

export default router;
