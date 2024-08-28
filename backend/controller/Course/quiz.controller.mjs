import db from "../../config/db.config.mjs";
import transporter from "../../config/email.config.mjs";
import path from "path";

export const addQuiz = (req, res) => {
  const { text, option } = req.body;
  const query = "INSERT INTO quiz_text (text, `option`) VALUES (?, ?)";

  db.query(query, [text, JSON.stringify(option)], (err, results) => {
    if (err) {
      return res.json({ error: "db_error" });
    }
    res.status(201).json({ message: "quiz_added", id: results.insertId });
  });
};
