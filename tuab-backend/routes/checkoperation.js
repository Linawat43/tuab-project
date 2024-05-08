var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

router.get('/', jsonParser, function(req, res, next) {

  connection.execute("SELECT startDate, endDate FROM operationDay ",
      (err, rows) => {
        if (err) {
          console.error('Error executing SELECT query:', err);
          return;
        }
        const formattedRows = rows.map(row => {
            const { endDate } = row;
            const dateObject = new Date(endDate);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

            const formattedDate = dateObject.toLocaleDateString('en-GB', options)
              .split('/')
              .reverse()
              .join('-');
      
            return {
              endDate: formattedDate,
            };
          });
      
          res.json(formattedRows);
          console.log(formattedRows);
      }
    );
  });
  
  module.exports = router;