;(function() {
  /* START edit admin page */
  var edit_validator = new FormValidator('js-edit-form-admin', [{
    name: 'password',
    display: 'password',
    rules: 'required|min_length[9]|max_length[20]'
  }, {
    name: 'password-confirm',
    display: 'password confirmation',
    rules: 'required|matches[password]'
  }], function(errors, event) {
    var validateNotes = {
      password: document.getElementById('js-edit-form-admin-password-vd-msg'),
      'password-confirm': document.getElementById('js-edit-form-admin-password-confirm-vd-msg')
    };
    validateNotes.password.innerText = '';
    validateNotes['password-confirm'].innerText = '';
    if (errors.length > 0) {
      errors.forEach(function(e) {
        validateNotes[e.name].innerText = e.message;
      });
    }
  });
  /* END edit admin page */
})();
