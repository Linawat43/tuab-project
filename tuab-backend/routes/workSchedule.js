var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

router.post('/', jsonParser, function(req, res, next) {
    const { username, workDate, workShift } = req.body;
  
    connection.execute("INSERT INTO WorkSchedule (username, workingDate, workingShift) VALUES (?, ?, ?)",
        [username, workDate, workShift],
        (err, results) => {
            if (err) {
                console.error('Error inserting workSchedule into database:', err);
                return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
            }
            res.json({ status: 'ok', message: 'WorkSchedule successful', workId: results.insertId });
        });
  });
  
  module.exports = router;