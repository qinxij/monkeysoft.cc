const express = require('express');
const passport = require('passport');

const User = require('../models/user');
const Payment = require('../models/payment');
const Data = require('../config/data');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash('error');
  res.locals.infos = req.flash('info');
  next();
});

router.get('/', (req, res, next) => {
  res.render('index', { iconMonkeydown: Data.monkeydownData.icon,
                        iconGhstars: Data.ghstarsData.icon
                      });
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;


  User.findOne({ username: username }, (err, user) => {
    if (err) { return next(err); }
    if (user) {
      req.flash('error', 'User already exists');
      return res.redirect('/signup');
    }

    if (!['admin', 'root'].includes(username)) {
      req.flash('error', 'You are not adminstrator.');
      return res.redirect('/signup');
    }

    const newUser = new User({
      username: username,
      password: password
    });
    newUser.save(next);
  });
}, passport.authenticate('login', {
  successRedirect: '/admin',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('login', {
  successRedirect: '/admin',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash('info', 'You must be logged in to see this page.');
    res.redirect('/login');
  }
}

router.get('/edit', ensureAuthenticated, (req, res) => {
  res.render('edit');
});

router.post('/edit', ensureAuthenticated, (req, res, next) => {
  req.user.password = req.body.password;
  req.user.save((err) => {
    if (err) {
      next(err);
      return;
    }
    req.flash('info', 'Password Updated!');
    res.redirect('/edit');
  });
});

router.get('/monkeydown', (req, res, next) => {
  res.render('monkeydown', Data.monkeydownData);
});

router.get('/ghstars', (req, res, next) => {
  res.render('ghstars', Data.ghstarsData);
});

router.get('/store/monkeydown', (req, res, next) => {
  res.render('store', { soft: 'Monkeydown',
                        price: Data.monkeydownData.price,
                        icon: Data.monkeydownData.icon,
                        qrCode: req.flash('qrCode'),
                        noInvoice: req.flash('noInvoice')
                      });
});

router.get('/store/monkeydown/alipay', (req, res, next) => {
  res.render('store-alipay', { soft: 'Monkeydown',
                               price: Data.monkeydownData.price,
                               icon: Data.monkeydownData.icon,
                               qrCodeImage: '/img/alipay-qrcode.png',
                               qrCode: req.flash('qrCode'),
                               noInvoice: req.flash('noInvoice')
                             });
});

router.get('/store/ghstars', (req, res, next) => {
  res.render('store', { soft: 'GHstars',
                        price: Data.ghstarsData.price,
                        icon: Data.ghstarsData.icon,
                        qrCode: req.flash('qrCode'),
                        noInvoice: req.flash('noInvoice')
                      });
});

router.get('/store/ghstars/alipay', (req, res, next) => {
  res.render('store-alipay', { soft: 'GHstars',
                               price: Data.ghstarsData.price,
                               icon: Data.ghstarsData.icon,
                               qrCodeImage: '/img/alipay-qrcode.png',
                               qrCode: req.flash('qrCode'),
                               noInvoice: req.flash('noInvoice')
                             });
});

router.get('/admin', ensureAuthenticated, (req, res, next) => {
  Payment.find()
    .sort({ createdAt: 'descending' })
    .limit(50)
    .exec((err, payments) => {
      if (err) { return next(err); }
      return res.render('admin', { payments: payments });
    });
});

router.post('/deletepayments', (req, res, next) => {
  const payments = req.body.payments.split(' ');
  console.log('payments');
  console.log(payments);
  Payment.remove({ paymentId: { $in: payments } }, (err) => {
    console.log('err', err);
    if (err) { return next(err); }
    req.flash('info', 'Delete the payments successfully');
    return res.redirect('/admin');
  });
});

router.get('/payment/:paymentId', ensureAuthenticated, (req, res, next) => {
  Payment.findOne({ paymentId: req.params.paymentId }, (err, payment) => {
    if (err) { next(err); return; }
    res.render('payment', { payment });
  });
});

module.exports = router;
