document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (!usuarioGuardado) {
      alert("⚠️ No hay usuarios registrados.");
      return;
    }

    if (usuarioGuardado.email === email && usuarioGuardado.password === password) {
      alert("✅ Bienvenido, " + usuarioGuardado.nombre);
      // Aquí puedes redirigir al home
      // window.location.href = "index.html";
    } else {
      alert("❌ Correo o contraseña incorrectos");
    }
  });
});
