var express = require('express');
var connection = require('../connection/db.js');
var router = express.Router();

router.get('/', async function (req, res, next) {
    await connection.execute(`SELECT targetLaneID, shiftID, DATE_FORMAT(bookingDate, '%Y-%m-%d') AS bookingDate FROM Booking WHERE bookingDate='2024-01-01'`, async (err, rows) => {
        if (err) {
          console.error('Error executing SELECT query:', err);
          return;
        }
        res.json(rows)
    })
})

module.exports = router;