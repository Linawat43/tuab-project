var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var connection = require('../connection/db.js');

router.post('/', jsonParser, function(req, res, next) {
    const { username, bankno, bank, proceedDate, bookingID } = req.body;

  connection.execute("INSERT INTO Payment (username, accountDigit, bankName, dateATime, bookingID) VALUES (?, ?, ?, ?, ?)",
      [username, bankno, bank, proceedDate, bookingID],
      (err, results) => {
        if (err) {
            console.error('Error inserting payment into database:', err);
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
        res.json({ status: 'ok', message: 'Payment successfully', paymentId: results.insertId });
      });
});

module.exports = router;