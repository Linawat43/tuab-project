var express = require('express');
var connection = require('../../connection/db.js');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var jwt = require('jsonwebtoken');

router.get('/', jsonParser, async function (req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { username } = decoded;

        await connection.execute(`SELECT * FROM User WHERE username = ?`, [username], async (err, users) => {
            if (err) {
                console.error('Error executing SELECT query:', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
            if (users.length > 0) {
                return res.json(users[0]);
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        });
    } catch (error) {
        console.error('JWT verification error:', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
});

module.exports = router;