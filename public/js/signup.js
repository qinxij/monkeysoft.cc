;$(function() {
  /* START signup admin page */
  var signup_validator = new FormValidator('js-signup-form', [{
    name: 'username',
    rules: 'required'
  }, {
    name: 'password',
    display: 'password',
    rules: 'required|min_length[9]|max_length[20]'
  }, {
    name: 'password-confirm',
    display: 'password confirmation',
    rules: 'required|matches[password]'
  }], function(errors, event) {
    var validateNotes = {
      username: document.getElementById('js-signup-form-username-vd-msg'),
      password: document.getElementById('js-signup-form-password-vd-msg'),
      'password-confirm': document.getElementById('js-signup-form-password-confirm-vd-msg')
    };
    validateNotes.username.innerText = '';
    validateNotes.password.innerText = '';
    validateNotes['password-confirm'].innerText = '';
    if (errors.length > 0) {
      errors.forEach(function(e) {
        validateNotes[e.name].innerText = e.message;
      });
    }
  });
  /* END signup admin page */
});
