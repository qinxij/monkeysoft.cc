/* START store page */
var qrcode = document.getElementById('js-store-qrcode');
if (qrcode) {
  // checking alipay payment state
  var store_alipay_checking = false;
  var noInvoice = qrcode.dataset.noinvoice;
  function checkInvoiceStatus(noInvoice, intervalId) {
    if (store_alipay_checking) return;
    store_alipay_checking = true;

    $.post('/api/pay/alipay/checkinvoice', { noInvoice: noInvoice }, function(result) {
      if (result.status === true && result.payment.status === 'approved') {
        location.href = 'https://'+ location.host + '/api/pay/success?_ce=' + result.payment.customerEmail;
        clearInterval(intervalId);
      }
      store_alipay_checking = false;
    });
  }

  var intervalId = setInterval(
    (function() { checkInvoiceStatus(noInvoice, intervalId); }).bind(this),
    2000);
} else {
  // validate store form
  var store_validator = new FormValidator('js-store-form-pay', [{
    name: 'email',
    display: 'email',
    rules: 'required|valid_email'
  }, {
    name: 'username',
    rules: 'required|min_length[4]|max_length[15]'
  }], function(errors, event) {
    var validateNotes = {
      email: document.getElementById('js-store-form-pay-email-vd-msg'),
      username: document.getElementById('js-store-form-pay-username-vd-msg')
    };
    validateNotes.email.innerText = '';
    validateNotes.username.innerText = '';
    if (errors.length > 0) {
      errors.forEach(function(e) {
        validateNotes[e.name].innerText = e.message;
      });
    }
  });

  function store_switchPayType(e) {
    var submitElement = document.getElementById('js-store-from-pay-submit');
    submitElement.value = e.target.dataset.svalue;
  }

  $(function() {
    // var store_paytypeElements = document.getElementsByClassName('js-store-form-pay-paytype');
    // console.log(store_paytypeElements);
    // store_paytypeElements.forEach(function (e) { e.onchange = store_switchPayType; });
  });
}

/* END store page */
