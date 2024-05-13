var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var connection = require('../connection/db.js');

// Send telNumber information to be stored in the user's Database.
router.post('/', jsonParser, function(req, res, next) {
  const { username, tel } = req.body;

  if (!username || !tel) {
    return res.status(400).json({ status: 'error', message: 'Missing username or telNumber' });
  }

  connection.execute(
    "UPDATE User SET telNumber = ? WHERE username = ?",
    [tel, username],
    (err, results) => {
      if (err) {
        console.error('Error updating telNumber for user:', err);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      }
  
      if (results.affectedRows === 0) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
      }
  
      res.json({ status: 'ok', message: 'TelNumber updated successfully' });
    }
  );

});

module.exports = router;