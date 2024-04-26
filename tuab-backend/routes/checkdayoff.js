var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

router.get('/', jsonParser, function(req, res, next) {
  const { workDate } = req.query;

    connection.execute("SELECT workingDate FROM WorkSchedule WHERE workingDate = ?",
    [workDate],
    (err, rows) => {
        if (err) {
        console.error('Error executing SELECT query:', err);
        return;
        }
        res.json(rows)
        console.log(rows);
    })
})
  
module.exports = router;