// Espera a que cargue todo el DOM
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // evita recargar la página

      // Capturar los valores de los inputs
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      // Validar campos vacíos
      if (!nombre || !email || !telefono || !mensaje) {
        Swal.fire({
          title: "Campos vacíos",
          text: "Por favor completa todos los campos antes de enviar.",
          icon: "warning",
          confirmButtonText: "Entendido",
        });
        return;
      }

      // Mostrar datos en consola
      console.log("=== Nuevo mensaje de contacto ===");
      console.log("Nombre:", nombre);
      console.log("Email:", email);
      console.log("Teléfono:", telefono);
      console.log("Mensaje:", mensaje);

      // Mostrar confirmación al usuario
      Swal.fire({
        title: "Información enviada",
        text: "Tu mensaje fue registrado correctamente.",
        icon: "success",
        confirmButtonText: "Ok",
      });

      // Limpiar formulario después de enviar
      form.reset();
    });
  }
});
