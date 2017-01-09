;(function() {
  /* START alipay page */
  var alipay_validator = new FormValidator('js-alipay-form', [{
    name: 'email',
    display: 'email',
    rules: 'required|valid_email'
  }, {
    name: 'username',
    rules: 'required|min_length[4]|max_length[15]'
  }], function(errors, event) {
    var validateNotes = {
      email: document.getElementById('js-alipay-email-vd-msg'),
      username: document.getElementById('js-alipay-username-vd-msg')
    };
    validateNotes.email.innerText = '';
    validateNotes.username.innerText = '';
    if (errors.length > 0) {
      errors.forEach(function(e) {
        validateNotes[e.name].innerText = e.message;
      });
    }
  });

  function alipay_switchPayType(e) {
    var submitElement = document.getElementById('js-alipay-form-submit');
    submitElement.value = e.target.dataset.svalue;
  }

  var alipay_paytypeElements = document.getElementsByClassName('js-alipay-form-paytype');
  alipay_paytypeElements.forEach(function (e) { e.onchange = alipay_switchPayType; });

  /* END alipay page */
})();
