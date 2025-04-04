
function mostrarProductos() {
  const lista = document.getElementById('producto-lista');
  lista.innerHTML = '';

  const productos = JSON.parse(localStorage.getItem('productos')) || [];

  productos.forEach((producto, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.cantidad}</td>
      <td>${producto.precio}</td>
      <td>
        <button onclick="verDetalles(${index})">Ver Detalles</button>
        <button onclick="eliminarProducto(${index})">Eliminar</button>
      </td>
    `;
    lista.appendChild(fila);
  });
}

function verDetalles(index) {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  const producto = productos[index];

  alert(`Detalles del producto:\n\nNombre: ${producto.nombre}\nCantidad: ${producto.cantidad}\nPrecio: ${producto.precio}`);
}
