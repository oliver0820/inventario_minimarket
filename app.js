function actualizarProducto(index) {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  const producto = productos[index];
  
  // Llenar el formulario con los datos actuales del producto
  document.getElementById('nombre').value = producto.nombre;
  document.getElementById('cantidad').value = producto.cantidad;
  document.getElementById('precio').value = producto.precio;

  // Cambiar el botón para que al enviar actualice el producto
  const form = document.getElementById('producto-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    producto.nombre = document.getElementById('nombre').value;
    producto.cantidad = document.getElementById('cantidad').value;
    producto.precio = document.getElementById('precio').value;

    productos[index] = producto;
    localStorage.setItem('productos', JSON.stringify(productos));
    mostrarProductos();
    form.reset();
  });
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

