var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const axios = require('axios');
require('dotenv').config();
// const session = require('express-session');
var jwt = require('jsonwebtoken');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
// const jwtMiddleware = require('./routes/jwtMiddleware');
// var registerRouter = require('./routes/register');
// var generalUseHomeRouter = require('./routes/generalUserHome');
var bookingRouter = require('./routes/booking');
var userDetail = require('./routes/user/user_detail');
var bookingCheckRouter = require('./routes/bookingCheck');
var workScheduleRouter = require('./routes/workSchedule');
var checkWorkRouter = require('./routes/checkWork');
var checkdayoffRouter = require('./routes/checkdayoff');
var addTelnumberRouter = require('./routes/addTelnumber');
var cancelBookingRouter = require('./routes/cancelBooking');
var bookingHistoryRouter = require('./routes/bookingHistory');
var checkBookStaffRouter = require('./routes/checkBookStaff');
var staffApproveRouter = require('./routes/staffApprove');
var uploadSlipRouter = require('./routes/uploadSlip');
var operationRouter = require('./routes/operation');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
// app.use('/register', registerRouter);
// app.use('/generalUserHome', generalUserHome);
app.use('/booking', bookingRouter);
app.use('/user-detail', userDetail);
app.use('/bookingCheck', bookingCheckRouter);
app.use('/workSchedule', workScheduleRouter);
app.use('/checkWork', checkWorkRouter);
app.use('/checkdayoff', checkdayoffRouter);
app.use('/addTelnumber', addTelnumberRouter);
app.use('/cancelBooking', cancelBookingRouter);
app.use('/bookingHistory', bookingHistoryRouter);
app.use('/checkBookStaff', checkBookStaffRouter);
app.use('/staffApprove', staffApproveRouter);
app.use('/uploadSlip', uploadSlipRouter);
app.use('/operation', operationRouter);

// app.use('/protectedRoute', jwtMiddleware);
// app.use(session({
//   secret: 'your_secret_key',
//   resave: false,
//   saveUninitialized: true,
// }));

// app.use(authRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
