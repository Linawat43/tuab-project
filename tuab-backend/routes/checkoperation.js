var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

// Check opening and closing dates for all archery fields.
router.get('/', jsonParser, function(req, res, next) {

  connection.execute("SELECT startDate, endDate, operationID FROM operationDay ",
  (err, rows) => {
    if (err) {
      console.error('Error executing SELECT query:', err);
      return;
    }
    const formattedRows = rows.map(row => {
      const { endDate, operationID } = row;
      const dateObject = new Date(endDate);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

      const formattedDate = dateObject.toLocaleDateString('en-GB', options)
      .split('/')
      .reverse()
      .join('-');

      return {
        endDate: formattedDate,
        operationID
      };
    });
    res.json(formattedRows);
    });
  });
  
  module.exports = router;