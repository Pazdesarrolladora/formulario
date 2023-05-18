// Espera a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Obtén una referencia al formulario
    var form = document.querySelector('.needs-validation');
    
    // Agrega un controlador de eventos para el envío del formulario
    form.addEventListener('submit', function(event) {
      // Verifica si el formulario es válido
      if (!form.checkValidity()) {
        event.preventDefault(); // Evita que el formulario se envíe
        event.stopPropagation(); // Evita que el evento se propague
        
        // Agrega las clases de validación a los campos no válidos
        form.classList.add('was-validated');
      }
    }, false);
  }, false);
  