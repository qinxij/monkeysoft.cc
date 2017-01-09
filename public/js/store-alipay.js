var storeAlipay_validator = new FormValidator('js-storealipay-form', [{
  name: 'email',
  display: '邮箱',
  rules: 'required|valid_email'
}, {
  name: 'username',
  display: '用户名',
  rules: 'required|min_length[4]|max_length[15]'
}, {
  name: 'saleId',
  display: '交易号',
  rules: 'required'
}], function(errors, event) {
  var validateNotes = {
    email: document.getElementById('js-storealipay-form-email-vd-msg'),
    username: document.getElementById('js-storealipay-form-username-vd-msg'),
    saleId: document.getElementById('js-storealipay-form-saleId-vd-msg')
  };
  validateNotes.email.innerText = '';
  validateNotes.username.innerText = '';
  validateNotes.saleId.innerText = '';
  if (errors.length > 0) {
    // Show the errors
    errors.forEach(function(e) {
      validateNotes[e.name].innerText = e.message;
    });
  }
});

function storeAlipay_switchHidden(e) {
  console.log('Switch Hidden');
  var notPaied = document.getElementById('js-not-paied');
  var paied = document.getElementById('js-paied');
  if (notPaied.classList.contains('sa-hide')) {
    notPaied.classList.remove('sa-hide');
    paied.classList.add('sa-hide');
  } else {
    notPaied.classList.add('sa-hide');
    paied.classList.remove('sa-hide');
  }
}
