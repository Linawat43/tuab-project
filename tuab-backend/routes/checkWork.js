var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

// Check to see if any staff have signed in or not.
router.get('/', jsonParser, function(req, res, next) {
  const { username,workDate } = req.query;

  connection.execute("SELECT username, workingDate, workingShift FROM WorkSchedule WHERE username = ? AND workingDate = ?",
  [username, workDate],
  (err, rows) => {
    if (err) {
      console.error('Error executing SELECT query:', err);
      return;
    }
    res.json(rows)
  })
})
  
  module.exports = router;