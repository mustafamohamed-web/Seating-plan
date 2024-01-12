const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mustafa246",
  database: "staff",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.post("/api/data", (req, res) => {
  const { firstName, surname, experience, productivity, job } = req.body;
  const sql =
    "INSERT INTO staffList (firstName, surname, experience, productivity, job) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [firstName, surname, experience, productivity, job],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json({
          id: result.insertId,
          firstName,
          surname,
          experience,
          productivity,
          job,
        });
      }
    }
  );
});

app.get("/api/data", (req, res) => {
  const sql = "SELECT * FROM staffList";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
