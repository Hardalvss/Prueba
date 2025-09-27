console.log("✅ carrito.js cargado");

// Productos de prueba (después se conectan con productos reales)
const carrito = [
  { id: 1, nombre: "Pantalón Cargo Negro", precio: 34990, cantidad: 1 },
  { id: 2, nombre: "Pantalón Cargo Verde", precio: 32990, cantidad: 2 }
];

const carritoBody = document.getElementById("carrito-body");
const subtotalEl = document.getElementById("subtotal");
const envioEl = document.getElementById("envio");
const totalEl = document.getElementById("total");

function renderCarrito() {
  carritoBody.innerHTML = "";
  let subtotal = 0;

  carrito.forEach((item, index) => {
    const totalItem = item.precio * item.cantidad;
    subtotal += totalItem;

    carritoBody.innerHTML += `
      <tr>
        <td>${item.nombre}</td>
        <td>$${item.precio.toLocaleString()}</td>
        <td>
          <input type="number" min="1" value="${item.cantidad}" 
                 class="form-control form-control-sm cantidad" 
                 data-index="${index}">
        </td>
        <td>$${totalItem.toLocaleString()}</td>
        <td>
          <button class="btn btn-danger btn-sm eliminar" data-index="${index}">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    `;
  });

  const envio = 3990;
  subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
  totalEl.textContent = `$${(subtotal + envio).toLocaleString()}`;
}

// Eventos
carritoBody.addEventListener("input", (e) => {
  if (e.target.classList.contains("cantidad")) {
    const index = e.target.dataset.index;
    carrito[index].cantidad = parseInt(e.target.value);
    renderCarrito();
  }
});

carritoBody.addEventListener("click", (e) => {
  if (e.target.closest(".eliminar")) {
    const index = e.target.closest(".eliminar").dataset.index;
    carrito.splice(index, 1);
    renderCarrito();
  }
});

// Render inicial
renderCarrito();
