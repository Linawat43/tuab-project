var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var connection = require('../connection/db.js');

router.post('/', jsonParser, function(req, res, next) {
  const { start, end, opID } = req.body;

  connection.execute("INSERT INTO OperationDay (operationID, startDate, endDate) VALUES (?, ?, ?)",
      [opID, start, end],
      (err, results) => {
          if (err) {
              console.error('Error inserting operation into database:', err);
              return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
          }
          if (results.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
          }
          res.json({ status: 'ok', message: 'successful'});
      });
});

module.exports = router;