var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var connection = require('../connection/db.js');

// Add user payment to the Database.
router.post('/', jsonParser, function(req, res, next) {
  const { username, bankno, bank, proceedDate, bookingID } = req.body;

  connection.execute("INSERT INTO Payment (username, accountDigit, bankName, dateATime, bookingID) VALUES (?, ?, ?, ?, ?)",
  [username, bankno, bank, proceedDate, bookingID],
  (err, results) => {
    if (err) {
      console.error('Error inserting payment into database:', err);
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
    const paymentId = results.insertId;
    console.log('Payment inserted successfully with paymentId:', paymentId);

    connection.execute("SELECT * FROM Booking WHERE bookingID = ?",
    [bookingID],
    (err, bookingResults) => {
      if (err) {
        console.log('Error querying Booking table:', err);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      }
      if (bookingResults && bookingResults.length > 0) {
        connection.execute("UPDATE Booking SET paymentID = ? WHERE bookingID = ?",
        [paymentId, bookingID],
        (err, updateResults) => {
          if (err) {
            console.error('Error updating Booking table:', err);
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
          }
          res.json({ status: 'ok', message: 'Payment successfully', paymentId: paymentId});
        })
      } else {
        console.error('BookingID not found in Booking table.');
        res.status(404).json({ status: 'error', message: 'BookingID not found' });
      }
    })
  });
});

module.exports = router;