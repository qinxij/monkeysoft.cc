/* START admin page */
function admin_onclickToggleEdit() {
  var btnToggle = document.getElementById('js-admin-toggle-edit');
  var btnSubmit = document.getElementById('js-admin-submit');
  var delBtns = document.getElementsByClassName('js-admin-del-icon');

  var classMethod;
  if (btnToggle.value === 'Edit') {
    classMethod = 'add';
    btnToggle.value = 'Cancel';
  } else {
    classMethod = 'remove';
    btnToggle.value = 'Edit';
  }

  btnSubmit.classList[classMethod]('show');
  for (var i =0; i < delBtns.length; ++i) {
    delBtns[i].classList[classMethod]('show');
  }
}

function admin_onclickDel(index, paymentId) {
  var row = document.getElementById(`js-admin-pl-${index}`);
  var paymentsField = document.getElementById('js-admin-form-payments');
  row.classList.toggle('strike-through');
  paymentsField.classList.toggle(paymentId);
  paymentsField.value = paymentsField.classList;
}
/* END admin page */
