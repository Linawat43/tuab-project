var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var jwt = require('jsonwebtoken');

var connection = require('../connection/db.js');

// Login system.
router.post('/', jsonParser, async function (req, res, next) {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify',
      data: { "UserName": req.body.username, "PassWord": req.body.password },
      headers: {
        'Content-Type': 'application/json',
        'Application-Key': process.env.APP_KEY
      }
    });
    //When finding data frome the restapi.tu.ac.th
    if (response.data.message == 'Success') {
      const whereCondition = `username = '${req.body.username}'`;

      await connection.execute(`SELECT * FROM User WHERE ${whereCondition}`, async (err, users) => {
        if (err) {
          console.error('Error executing SELECT query:', err);
          return;
        }
        //When username is not found in the Database
        if (users.length == 0) {
          await connection.execute("INSERT INTO User (username, name) VALUES (?, ?)",
          [req.body.username, response.data.displayname_en],
          (err, results) => {
            console.log("==> insert results", results);
          });
          let userRoles = '1'; // set role generalUser

          const jwtToken = jwt.sign({
            username: req.body.username,
            roleID: userRoles
        }, process.env.JWT_SECRET, { expiresIn: '20m' });

        res.json({ status: 'ok', token: jwtToken});

        }
        //Check roleID when found username in Database
        else {
          await connection.execute('SELECT roleID FROM User WHERE username = ?', [req.body.username], async (err, roles) => {
          if (err) {
            console.error('Error executing SELECT query for roles:', err);
            return;
          }
          const jwtToken = jwt.sign({
            username: req.body.username,
            roleID: roles[0].roleID,
          }, process.env.JWT_SECRET, { expiresIn: '20m' });

          res.json({ status: 'ok', token: jwtToken});
          });
        }
      });
    } 
    else {
      res.json({ status: 'error', message: 'login-failed', data: response.data });
      console.log('1');
    }

    } catch (error) {
      console.error('Login error:', error);
      res.json({ status: 'error', message: 'login-failed', data: error.response?.data });
      console.log('2');
    }
});

module.exports = router;
