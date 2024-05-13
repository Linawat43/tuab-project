var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

// View a user's booking history by filtering it to show only that month.
router.get('/', jsonParser, function(req, res, next) {
    const { username } = req.query;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
  
    connection.execute(
      "SELECT bookingDate, targetLaneID, shiftID, bookingStatusID, bookingID FROM Booking WHERE username = ?",
      [username],
      (err, rows) => {
        if (err) {
          console.error('Error executing SELECT query:', err);
          return res.status(500).json({ error: 'Database error' });
        }
  
        const filteredRows = rows.filter(row => {
          const bookingDate = new Date(row.bookingDate);
          const rowMonth = bookingDate.getMonth() + 1;
          const rowYear = bookingDate.getFullYear();
  
          return rowMonth === currentMonth && rowYear === currentYear;
        });
  
        const formattedRows = filteredRows.map(row => {
            const dateObject = new Date(row.bookingDate);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            const formattedDate = dateObject.toLocaleDateString('en-GB', options)
            .split('/')
            .reverse()
            .join('-');
  
            let lane;
            if (row.targetLaneID >= 101 && row.targetLaneID <= 106) {
                lane = row.targetLaneID - 100;
            }
    
            let shift;
            if (row.shiftID === '1') {
                shift = '17:00';
            } else if (row.shiftID === '2') {
                shift = '17:30';
            }
    
            return {
                bookingDate: formattedDate,
                targetLaneID: lane,
                shiftID: shift,
                bookingStatusID: row.bookingStatusID,
                bookingID: row.bookingID
            };
        });
  
        res.json(formattedRows);
      }
    );
  });
  
module.exports = router;