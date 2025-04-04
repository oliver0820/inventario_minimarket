document.getElementById('producto-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const cantidad = document.getElementById('cantidad').value;
  const precio = document.getElementById('precio').value;

  const producto = {
    nombre,
    cantidad,
    precio
  };

  agregarProducto(producto);
  mostrarProductos();
  this.reset();
});

function agregarProducto(producto) {
  let productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.push(producto);
  localStorage.setItem('productos', JSON.stringify(productos));
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
      <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
    `;
    lista.appendChild(fila);
  });
}


document.addEventListener('DOMContentLoaded', mostrarProductos);

