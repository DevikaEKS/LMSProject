import db from "../config/db.config.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../config/email.config.mjs";
const saltRounds = 10;
const jwtSecret = "secret";

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
          return res.status(500).json({
            message: "Error checking email/phone number in User table.",
          });
        }

        if (userRows.length > 0) {
          return res.json({
            message: "Email or Phone number already exists in User table.",
          });
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
              (err, userResult) => {
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
                  (err, authResult) => {
                    if (err) {
                      console.error(err);

                      // Rollback User table insert if Auth insert fails
                      db.query(
                        "DELETE FROM user WHERE email = ?",
                        [email],
                        () => {}
                      );

                      return res
                        .status(500)
                        .json({ message: "Error inserting into Auth table." });
                    }

                    const mailOptions = {
                      from: "sivaranji5670@gmail.com",
                      to: email,
                      subject: "Welcome to LMS",
                      text: `Hello ${name},\n\nThank you for registering with our LMS platform!\n\nBest Regards,\nLMS Team`,
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                      if (error) {
                        console.error(error);

                        // Rollback the inserts if email fails
                        db.query(
                          "DELETE FROM user WHERE email = ?",
                          [email],
                          () => {}
                        );
                        db.query(
                          "DELETE FROM auth WHERE email = ?",
                          [email],
                          () => {}
                        );

                        return res.status(500).json({
                          message: "Registration failed. Please try again.",
                        });
                      } else {
                        res.status(201).json({
                          message: "User registered successfully.",
                        });
                      }
                    });
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
        return res.json({ message: "Invalid email or password" });
      }

      // Create a JWT token
      const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
        expiresIn: "1h",
      });

      // Respond with the token
      res.json({ message: "login success", token });
    });
  });
};
