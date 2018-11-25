;(function () {
  var emailInput = document.querySelector('#email'),
    errorMsgs = document.querySelectorAll('#emailInputGroup [data-msg]');

  function modifyErrorMsgs(cb) {
    for (var i = 0; i < errorMsgs.length; i++) {
      cb(errorMsgs[i]);
    }
  }

  emailInput.addEventListener('invalid', function (evt) {
    evt.preventDefault();

    emailInput.classList.add('input-error');

    if (emailInput.validity.valueMissing) {
      modifyErrorMsgs(function (errorMsg) {
        if (errorMsg.dataset.msg === 'requiredField') {
          errorMsg.classList.add('show');
        }
      });
    }

    if (emailInput.validity.typeMismatch) {
      modifyErrorMsgs(function (errorMsg) {
        if (errorMsg.dataset.msg === 'incorrectFormat') {
          errorMsg.classList.add('show');
        }
      });
    }

    emailInput.classList.add('error');
  });

  emailInput.addEventListener('input', function () {
    emailInput.classList.remove('input-error');

    modifyErrorMsgs(function (errorMsg) {
      errorMsg.classList.remove('show');
    });
  });
})();
