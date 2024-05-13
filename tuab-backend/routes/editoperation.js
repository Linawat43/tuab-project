var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var connection = require('../connection/db.js');

// Edit and update the opening and closing times of the archery field.
router.post('/', jsonParser, function(req, res, next) {
  const { opID, Nstart, Nend } = req.body;

  if (!opID || !Nstart || !Nend) {
    return res.status(400).json({ status: 'error', message: 'Missing operationID or startDate or endDate' });
  }

  connection.execute(
    "UPDATE operationDay SET startDate = ?, endDate = ? WHERE operationID = ?",
    [Nstart, Nend, opID],
    (err, results) => {
      if (err) {
        console.error('Error updating status for user:', err);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      }
  
      if (results.affectedRows === 0) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
      }
  
      res.json({ status: 'ok', message: 'edit operation successfully' });
    }
  );

});

module.exports = router;