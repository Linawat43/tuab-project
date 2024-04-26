// var express = require('express');
// var connection = require('../connection/db.js');
// var router = express.Router();

// router.get('/', async function (req, res, next) {
  
//   const { username,workDate } = req.query;
//   console.log(username);
//   console.log(workDate);
//   await connection.execute(`SELECT username, workingDate FROM WorkSchedule WHERE username = ? AND workingDate = ?`, [username,workDate], async (err, rows) => {
//       if (err) {
//         console.error('Error executing SELECT query:', err);
//         return;
//       }
//       res.json(rows)
//   })
// })

// module.exports = router;

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

router.get('/', jsonParser, function(req, res, next) {
  const { username,workDate } = req.query;

    connection.execute("SELECT username, workingDate FROM WorkSchedule WHERE username = ? AND workingDate = ?",
        [username, workDate],
        (err, rows) => {
          if (err) {
            console.error('Error executing SELECT query:', err);
            return;
          }
          res.json(rows)
      })
    })
  
  module.exports = router;