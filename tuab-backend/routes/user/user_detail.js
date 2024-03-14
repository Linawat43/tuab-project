var express = require('express');
var connection = require('../../connection/db.js');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/', jsonParser, async function (req, res, next) {
    await connection.execute(`SELECT * FROM User WHERE username='6209620019'`, async (err, users) => {
        if (err) {
          console.error('Error executing SELECT query:', err);
          return;
        }
        res.json(users)
    })
})

module.exports = router;