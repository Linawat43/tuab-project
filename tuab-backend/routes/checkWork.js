var express = require('express');
var connection = require('../connection/db.js');
var router = express.Router();

router.get('/', async function (req, res, next) {
    const { selectedDate } = req.query;
    const query = `SELECT username, DATE_FORMAT(workingDate, '%Y-%m-%d') AS workingDate FROM WorkSchedule WHERE workingDate = ?`;

  await connection.query(query, [selectedDate], (err, rows) => {
    if (err) {
      console.error('Error executing SELECT query:', err);
      return res.status(500).json({ error: 'Error occurred while fetching data' });
    }
    res.json(rows);
  });
});

module.exports = router;