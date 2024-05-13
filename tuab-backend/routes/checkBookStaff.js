var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

// Browse all booking times for that day for staff to check.
router.get('/', jsonParser, function(req, res, next) {
  const { date } = req.query;

  connection.execute("SELECT Booking.bookingID, User.name, User.username, User.telNumber, Booking.shiftID, Booking.targetLaneID, Booking.bookingStatusID " +
  "FROM Booking " +
  "INNER JOIN User ON Booking.username = User.username " +
  "WHERE Booking.bookingDate = ?",
    [date],
    (err, rows) => {
      if (err) {
        console.error('Error executing SELECT query:', err);
        return;
      }

      const formattedRows = rows.map(row => {
        const fullName = row.name;
        const firstName = fullName.split(' ')[0];

        return {
          bookingID: row.bookingID,
          name: firstName,
          username: row.username,
          telNumber: row.telNumber,
          shiftID: row.shiftID,
          targetLaneID: row.targetLaneID,
          bookingStatusID: row.bookingStatusID
        }
      })

      res.json(formattedRows)
    }
  );
});
  
module.exports = router;