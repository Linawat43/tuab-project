var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

router.get('/', jsonParser, function(req, res, next) {
  const { workDate } = req.query;
  // const { workDate } = req.body;

  connection.execute("SELECT targetLaneID, shiftID, DATE_FORMAT(bookingDate, '%Y-%m-%d') AS bookingDate, bookingStatusID FROM Booking WHERE bookingDate = ?",
      [workDate],
      (err, rows) => {
        if (err) {
          console.error('Error executing SELECT query:', err);
          return;
        }
        const lanes = [101, 102, 103, 104, 105, 106];
        const shifts = [1, 2];
        const laneStatus = {};

        lanes.forEach(lane => {
          laneStatus[lane] = {};
          shifts.forEach(shift => {
            laneStatus[lane][shift] = false;
          });
        });

        rows.forEach(row => {
          const { targetLaneID, shiftID, bookingStatusID } = row;
          if (bookingStatusID === 1 || bookingStatusID === 2) {
            laneStatus[targetLaneID][shiftID] = true;
          } else if (bookingStatusID === 3 || bookingStatusID === 4) {
            laneStatus[targetLaneID][shiftID] = false;
          }
        });

        const availability = [];

        lanes.forEach(lane => {
          shifts.forEach(shift => {
            if (!laneStatus[lane][shift]) {
              availability.push({ lane, shift });
            }
          });
        });

        res.json(availability);
        // console.log(availability);
      }
    );
  });
  
  module.exports = router;