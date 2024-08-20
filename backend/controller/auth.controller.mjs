import db from "../config/db.config.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
const saltRounds = 10;
const jwtSecret = "secret"

export const registerUser = (req, res) => {
    const { name, email, phone_no, password } = req.body;
  
    if (!name || !email || !phone_no || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    // Hash the password
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error hashing password." });
      }
  
      // Check if email or phone_no exists in User table
      db.query(
        "SELECT email, phone_no FROM user WHERE email = ? OR phone_no = ?",
        [email, phone_no],
        (err, userRows) => {
          if (err) {
            console.error(err);
            return res
              .status(500)
              .json({ message: "Error checking email/phone number in User table." });
          }
  
          if (userRows.length > 0) {
            return res
              .status(400)
              .json({ message: "Email or Phone number already exists in User table." });
          }
  
          // Check if email exists in Auth table
          db.query(
            "SELECT email FROM auth WHERE email = ?",
            [email],
            (err, authRows) => {
              if (err) {
                console.error(err);
                return res
                  .status(500)
                  .json({ message: "Error checking email in Auth table." });
              }
  
              if (authRows.length > 0) {
                return res
                  .status(400)
                  .json({ message: "Email already exists in Auth table." });
              }
  
              // Insert into User table
              db.query(
                "INSERT INTO user (name, email, phone_no, password) VALUES (?, ?, ?, ?)",
                [name, email, phone_no, hashedPassword],
                (err) => {
                  if (err) {
                    console.error(err);
                    return res
                      .status(500)
                      .json({ message: "Error inserting into User table." });
                  }
  
                  // Insert into Auth table
                  db.query(
                    "INSERT INTO auth (email, password) VALUES (?, ?)",
                    [email, hashedPassword],
                    (err) => {
                      if (err) {
                        console.error(err);
                        return res
                          .status(500)
                          .json({ message: "Error inserting into Auth table." });
                      }
  
                      res
                        .status(201)
                        .json({ message: "User registered successfully." });
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  };
  

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Check if the user exists
  db.query("SELECT * FROM user WHERE email = ?", [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      return res.json({ message: "Invalid email or password raw data" });
    }

    const user = results[0];

    // Compare the hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: "Error comparing passwords" });
      }

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Create a JWT token
      const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
        expiresIn: "1h",
      });

      // Respond with the token
      res.json({message:"login success", token });
    });
  });
};
