const express = require('express');

const router = express.Router();

function paymentFailure(req, res) {
  req.flash('error', 'Payment failure with some reson, please try again later.');
  res.redirect(`/api/pay/failure`);
}

router.post('/', function(req, res, next) {
  req.flash('customerEmail', 'hello@example.com');
  return res.redirect('/api/pay/success');
});


router.get('/failure', function(req, res, next) {
  res.render('payment_error');
});
router.get('/success', function(req, res, next) {
  res.render('payment_success', { infos: `You payment is completed, the license key will send to your email ${req.flash('customerEmail')} in 24 hours.` });
});

module.exports = router;
