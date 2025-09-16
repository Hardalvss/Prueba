console.log("✅ registro.js cargado");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("Direccion").value;
    const comuna = document.getElementById("Comuna").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("❌ Las contraseñas no coinciden");
      return;
    }

    const usuario = { nombre, email, direccion, comuna, password };

    // Guardar en localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Mostrar en consola
    console.log("Usuario registrado:", usuario);

    Swal.fire({
  title: "¡Registro exitoso!",
  text: "Tu cuenta ha sido creada correctamente",
  icon: "success",
  confirmButtonText: "Ir a la tienda"
    }).then(() => {
  // Redirigir al index.html
  window.location.href = "index.html";
    });


  });
});
