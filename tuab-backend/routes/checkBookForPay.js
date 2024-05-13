var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

// Browse bookingID for use on the payment page In order to know that user who paid Which booking cycle do I pay?
router.get('/', jsonParser, function(req, res, next) {
  const { date, lane, username, shift } = req.query;

  connection.execute("SELECT bookingID FROM Booking WHERE bookingDate = ? AND targetLaneID = ? AND username = ? AND shiftID = ?",
  [date, lane, username, shift],
  (err, rows) => {
    if (err) {
      console.error('Error executing SELECT query:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  })
})
  
module.exports = router;