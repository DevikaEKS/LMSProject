const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


//richtext

let richTextContent = '';

app.post('/save', (req, res) => {
  richTextContent = req.body.content;
  res.send({ message: 'Content saved successfully' });
});

app.get('/content', (req, res) => {
  res.send({ content: richTextContent });
});

///

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Devika#123',
  database: 'lms'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Test route
app.get('/test', (req, res) => {
  res.json({ msg: "hello world" });
});

// Handle login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(query, [username, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ message: 'Login successful' });
    } else {
      res.send({ message: 'Invalid credentials' });
    }
  });
});

// Handle register route
app.post('/register', (req, res) => {
  const { name, email, phno, password, repassword } = req.body;
  console.log(name, email, phno, password, repassword);
  const sql = `INSERT INTO userregister (Name, Phno, Email, Password, Retype_password) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [name, phno, email, password, repassword], (err, result) => {
    if (err) {
      res.json({ msg: err });
    } else {
      res.json({ msg: "User registered successfully" });
    }
  });
});

// Get courses route
app.get('/api/courses', (req, res) => {
  let sql = 'SELECT * FROM courses';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Add module route
app.post('/api/createModules', (req, res) => {
  const { courseid, modulename } = req.body;
  
  // Generate the module_id
  let module_id = '';
  db.query('SELECT MAX(moduleid) AS max_id FROM modules WHERE courseid = ?', [courseid], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database query error' });
    }

    // Get max_id and handle it appropriately
    const max_id = results[0].max_id;

    if (max_id) {
      // Extract the numeric part of max_id
      const max_id_parts = max_id.split('.');
      const lastPart = parseInt(max_id_parts[max_id_parts.length - 1], 10);
      const newPart = lastPart + 1;
      module_id = `${courseid}.${newPart}`;
    } else {
      // If no max_id found, start with `courseid.1`
      module_id = `${courseid}.1`;
    }

    // Insert new module
    let sql = 'INSERT INTO modules (moduleid, courseid, modulename) VALUES (?, ?, ?)';
    db.query(sql, [module_id, courseid, modulename], (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Database insert error' });
      }
      res.send({ message: 'Module added', id: result.insertId });
    });
  });
});

app.get('/api/getModules',(req,res)=>{
  let sql = 'select * from modules'
  db.query(sql,(err,result)=>{
    if(err){
      res.json(err)
    }
    else{
      res.json(result)
    }
  })
})

app.post('/api/createSubModules', (req, res) => {
  const { courseid, moduleid, submodulename } = req.body;

  // Generate the submodule_id
  let submodule_id = '';
  db.query('SELECT MAX(submoduleid) AS max_id FROM submodules WHERE moduleid = ?', [moduleid], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database query error' });
    }

    const max_id = results[0].max_id;

    if (max_id) {
      // Extract the numeric part of max_id
      const max_id_parts = max_id.split('.');
      const lastPart = parseInt(max_id_parts[max_id_parts.length - 1], 10);
      const newPart = lastPart + 1;
      submodule_id = `${moduleid}.${newPart}`;
    } else {
      // If no max_id found, start with `moduleid.1`
      submodule_id = `${moduleid}.1`;
    }

    // Insert new submodule
    let sql = 'INSERT INTO submodules (submoduleid, courseid, moduleid, submodulename) VALUES (?, ?, ?, ?)';
    db.query(sql, [submodule_id, courseid, moduleid, submodulename], (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Database insert error' });
      }
      res.send({ message: 'Submodule added', id: result.insertId });
    });
  });
});


// get modules




// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

