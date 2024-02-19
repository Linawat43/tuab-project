// var express = require('express');
// var router = express.Router();
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
// const axios = require('axios');
// require('dotenv').config();

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME
// });

// router.post('/', jsonParser, async function (req, res, next) {
//     await connection.execute('INSERT INTO User (telNumber) VALUES (?)',
//     [req.body.telNumber],
//         (err, results) => {
//             console.log("==> insert results", results);
//         });
//         res.json({status: 'ok'})

//   });

// module.exports = router;