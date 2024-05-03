var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var connection = require('../connection/db.js');

router.post('/', jsonParser, function(req, res, next) {
    const { date, username, status } = req.body;

    if (!date || !username || !status) {
        return res.status(400).json({ status: 'error', message: 'Missing username or status' });
    }

    connection.execute(
        "UPDATE Booking SET bookingStatusID = ? WHERE bookingDate = ? AND username = ?",
        [status, date, username],
        (err, results) => {
          if (err) {
            console.error('Error updating status for user:', err);
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
          }
      
          if (results.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
          }
      
          res.json({ status: 'ok', message: 'status cancel updated successfully' });
        }
    );

});

module.exports = router;