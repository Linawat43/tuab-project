var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var multer = require('multer');
var upload = multer();
var connection = require('../connection/db.js');

router.post('/', upload.single('image'), function(req, res, next) {
    const { username } = req.body;
    const slipPhoto = req.file.originalname;
    const photoData = req.file.buffer;

  connection.execute("INSERT INTO Payment (slipPhoto, username, photoData) VALUES (?, ?, ?)",
      [slipPhoto, username, photoData],
      (err, results) => {
        if (err) {
            console.error('Error inserting payment into database:', err);
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
        res.json({ status: 'ok', message: 'Payment and photo uploaded successfully', paymentId: results.insertId });
      });
});

module.exports = router;