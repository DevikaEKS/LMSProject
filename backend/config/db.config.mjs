import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "greenwater",
  database: "lms",
});

db.connect((err) => {
  if (err) {
    console.log("error");
    return;
  } else {
    console.log("db connected");
  }
});

export default db;