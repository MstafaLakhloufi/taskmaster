// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'tasks.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database ' + err.message);
  } else {
    db.run(
      'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, text TEXT, completed BOOLEAN)',
      (err) => {
        if (err) {
          console.error('Error creating table ' + err.message);
        }
      }
    );
  }
});

// Middleware for verifying JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).send({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, 'your_jwt_secret');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({ message: 'Invalid Token' });
  }
};

// Route to add a new task
app.post('/api/tasks', verifyToken, (req, res) => {
  const { text } = req.body;
  db.run('INSERT INTO tasks (text, completed) VALUES (?, ?)', [text, false], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, text, completed: false });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
