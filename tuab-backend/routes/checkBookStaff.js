var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

router.get('/', jsonParser, function(req, res, next) {
  const { date } = req.query;

  connection.execute("SELECT User.username, User.telNumber, Booking.shiftID, Booking.targetLaneID " +
  "FROM Booking " +
  "INNER JOIN User ON Booking.username = User.username " +
  "WHERE Booking.bookingDate = ?",
    [date],
    (err, rows) => {
      if (err) {
        console.error('Error executing SELECT query:', err);
        return;
      }

      res.json(rows)
      // console.log(availability);
    }
  );
});
  
module.exports = router;