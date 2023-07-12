const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 19006;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Katore',
  password: 'RoadToAMilli#21',
  database: 'wellness'
});

app.use(cors());
//app.use(bodyParser.json());

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.get('/data', (req, res) => {
  const sql = 'SELECT * FROM userinfo';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
    console.log(results);
  });
});

app.post('/post', (req, res) => {
    const { name, surname, email, password } = req.body;
    const sql = 'INSERT INTO userinfo (name, surname, email, password) VALUES (?, ?)';
    connection.query(sql, [name, surname, email, password], (err, result) => {
      if (err) throw err;
      console.log('Data inserted successfully');
      res.send('Data inserted successfully');
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
