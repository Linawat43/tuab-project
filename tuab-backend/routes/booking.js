var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
});

router.post('/', jsonParser, function(req, res, next) {
  // Retrieve data from the request body
  const { date, lane } = req.body;

  // Insert the data into the database
  connection.execute("INSERT INTO Booking (bookingDate, targetLaneID, username) VALUES (?, ?, ?)",
      [date, lane, username],
      (err, results) => {
          if (err) {
              console.error('Error inserting booking into database:', err);
              return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
          }
          res.json({ status: 'ok', message: 'Booking successful', bookingId: results.insertId });
      });
});

module.exports = router;