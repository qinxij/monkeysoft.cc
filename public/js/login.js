/* START login admin page */
$(function() {
  if (!$('[name="js-login-form"]')) return;

  var login_validator = new FormValidator('js-login-form', [{
    name: 'username',
    rules: 'required'
  }, {
    name: 'password',
    display: 'password',
    rules: 'required'
  }], function(errors, event) {
    var validateNotes = {
      username: document.getElementById('js-login-form-username-vd-msg'),
      password: document.getElementById('js-login-form-password-vd-msg')
    };
    validateNotes.username.innerText = '';
    validateNotes.password.innerText = '';
    if (errors.length > 0) {
      // Show the errors
      errors.forEach(function(e) {
        validateNotes[e.name].innerText = e.message;
      });
    }
  });
});
/* END login admin page */
