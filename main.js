(function () {
    'use strict';
  
    var form = document.querySelector('.needs-validation');
    var alertMessage = document.querySelector('.alert');
  
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        showInvalidFeedback();
        alertMessage.style.display = 'block';
      } else {
        alertMessage.style.display = 'none';
      }
      form.classList.add('was-validated');
    });
  
    function showInvalidFeedback() {
      var inputs = form.querySelectorAll('.form-control');
  
      inputs.forEach(function (input) {
        if (!input.checkValidity()) {
          input.classList.add('is-invalid');
          input.addEventListener('input', handleInput);
        } else {
          input.classList.remove('is-invalid');
        }
      });
    }
  
    function handleInput(event) {
      var input = event.target;
  
      if (input.checkValidity()) {
        input.classList.remove('is-invalid');
        input.removeEventListener('input', handleInput);
      }
    }
  })();
  