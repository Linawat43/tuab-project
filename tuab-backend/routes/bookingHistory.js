var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

router.get('/', jsonParser, function(req, res, next) {
  const { username } = req.query;

    connection.execute("SELECT bookingDate, targetLaneID, shiftID FROM Booking WHERE username = ?",
    [username],
    (err, rows) => {
        if (err) {
        console.error('Error executing SELECT query:', err);
        return;
        }
        res.json(rows)
        // console.log(rows);
    })
})
  
module.exports = router;