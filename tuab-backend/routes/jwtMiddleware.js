// const express = require('express');
// const router = express.Router();

// router.get('/profile', (req, res) => {
//   if (req.session.user) {
//     // User is logged in
//     res.send(`Welcome, ${req.session.user.name}`);
//   } else {
//     res.redirect('/login'); // Redirect to login page if user is not logged in
//   }
// });

// router.get('/logout', (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error('Error destroying session:', err);
//       res.sendStatus(500);
//     } else {
//       res.redirect('/login');
//     }
//   });
// });

// module.exports = router;

// const jwt = require('jsonwebtoken');

// module.exports = function(req, res, next) {
//   const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Assuming the token is sent in the 'Authorization' header

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized: Missing token' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Unauthorized: Invalid token' });
//     }

//     req.user = decoded; // Attach user information to the request object
//     next();
//   });
// };
