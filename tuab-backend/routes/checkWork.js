var express = require('express');
var connection = require('../connection/db.js');
var router = express.Router();

router.get('/', async function (req, res, next) {
  
  const { workDate } = req.body;
  await connection.execute(`SELECT * FROM WorkSchedule WHERE workingDate = ?`, [workDate], async (err, rows) => {
      if (err) {
        console.error('Error executing SELECT query:', err);
        return;
      }
      res.json(rows)
  })
})

module.exports = router;