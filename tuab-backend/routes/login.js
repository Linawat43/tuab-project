var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
var jwt = require('jsonwebtoken');

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
});

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
              res.json({ status: 'ok', message: 'login success', roles: userRoles, name: response.data.displayname_en, username: req.body.username});

              // const jwtToken = jwt.sign({
              //   username: req.body.username,
              //   roles: userRoles,
              //   name: response.data.displayname_en
              // }, process.env.JWT_SECRET, { expiresIn: '1h' });
              
              // res.json({ status: 'ok', token: jwtToken });
          }
          //Check roleID when found username in Database
          else {
            await connection.execute('SELECT roleID FROM User WHERE username = ?', [req.body.username], async (err, roles) => {
              if (err) {
                console.error('Error executing SELECT query for roles:', err);
                return;
              }
              let userRoles = roles.map(role => role.roleID);
              res.json({ status: 'ok', message: 'login success', roles: userRoles, name: response.data.displayname_en, username: req.body.username});

              // const jwtToken = jwt.sign({
              //   username: req.body.username,
              //   roles: userRoles,
              //   name: response.data.displayname_en
              // }, process.env.JWT_SECRET, { expiresIn: '1h' }); // You can set expiry as per your requirement
              // req.session.user = {
              //   username: req.body.username,
              //   name: response.data.displayname_en,
              //   roles: userRoles // Assuming userRoles is defined
              // };
              // res.json({ status: 'ok', message: 'login success', roles: userRoles, name: response.data.displayname_en });
            });
          }
        });
      } 
      else {
        res.json({ status: 'error', message: 'login-failed', data: response.data });
        console.log('1');
      }
      // req.session.user = {
      //   username: req.body.username,
      //   name: response.data.displayname_en,
      //   roles: userRoles // Assuming userRoles is defined
      // };
      // res.json({ status: 'ok', message: 'login success', roles: userRoles, name: response.data.displayname_en });

    } catch (error) {
        console.error('Login error:', error);
        res.json({ status: 'error', message: 'login-failed', data: error.response?.data });
        console.log('2');
    }
  });

module.exports = router;
