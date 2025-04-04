
function eliminarProducto(index) {
  let productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.splice(index, 1);  // Eliminar el producto de la lista
  localStorage.setItem('productos', JSON.stringify(productos));  // Actualizar localStorage
  mostrarProductos();  // Volver a mostrar la lista de productos actualizada
}

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
        <button onclick="eliminarProducto(${index})">Eliminar</button>
        <button onclick="actualizarProducto(${index})">Actualizar</button>
      </td>
    `;
    lista.appendChild(fila);
  });
}
