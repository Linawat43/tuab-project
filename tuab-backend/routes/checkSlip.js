var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

router.get('/', jsonParser, function(req, res, next) {
    const { username, bookId } = req.query;
  
    connection.execute(
      "SELECT bankName, accountDigit, dateATime FROM Payment WHERE username = ? AND bookingID = ?",
      [username, bookId],
      (err, rows) => {
        if (err) {
          console.error('Error executing SELECT query:', err);
          return res.status(500).json({ error: 'Database error' });
        }

        const transformedRows = rows.map(row => ({
          bankName: row.bankName,
          accountDigit: row.accountDigit,
          dateATime: formatDateTime(row.dateATime)
        }));
  
        res.json(transformedRows);
      }
    );
  });
  function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Bangkok'
    };
  
    return dateTime.toLocaleString('en-US', options);
  }
  
module.exports = router;