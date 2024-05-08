var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

router.get('/', jsonParser, function(req, res, next) {
  const { username } = req.query;

    connection.execute("SELECT bookingDate, targetLaneID, shiftID, bookingStatusID, bookingID FROM Booking WHERE username = ?",
    [username],
    (err, rows) => {
        if (err) {
            console.error('Error executing SELECT query:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        const formattedRows = rows.map(row => {
            const { bookingDate, targetLaneID, shiftID, bookingStatusID, bookingID } = row;
            const dateObject = new Date(bookingDate);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

            const formattedDate = dateObject.toLocaleDateString('en-GB', options)
              .split('/')
              .reverse()
              .join('-');
            var lane
            if(targetLaneID == 101){
                lane = 1
            } else if(targetLaneID == 102){
                lane = 2
            } else if(targetLaneID == 103){
                lane = 3
            } else if(targetLaneID == 104){
                lane = 4
            } else if(targetLaneID == 105){
                lane = 5
            } else if(targetLaneID == 106){
                lane = 6
            }

            var shift
            if(shiftID == '1'){
                shift = '17:00'
            } else if(shiftID == '2'){
                shift = '17:30'
            }
      
            return {
              bookingDate: formattedDate,
              targetLaneID: lane,
              shiftID: shift,
              bookingStatusID,
              bookingID
            };
          });
      
          res.json(formattedRows);
    })
})
  
module.exports = router;