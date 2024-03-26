var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var connection = require('../connection/db.js');

router.post('/', jsonParser, function(req, res, next) {
  const { date, lane, username, shift } = req.body;

  connection.execute("INSERT INTO Booking (bookingDate, targetLaneID, username, shiftID) VALUES (?, ?, ?, ?)",
      [date, lane, username, shift],
      (err, results) => {
          if (err) {
              console.error('Error inserting booking into database:', err);
              return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
          }
          res.json({ status: 'ok', message: 'Booking successful', bookingId: results.insertId });
      });
});

module.exports = router;