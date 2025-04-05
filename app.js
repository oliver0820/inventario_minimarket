let editando = false;
let indexActual = null;

function actualizarProducto(index) {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  const producto = productos[index];

  document.getElementById('nombre').value = producto.nombre;
  document.getElementById('cantidad').value = producto.cantidad;
  document.getElementById('precio').value = producto.precio;

  editando = true;
  indexActual = index;
}

document.getElementById('producto-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const productos = JSON.parse(localStorage.getItem('productos')) || [];

  const producto = {
    nombre: document.getElementById('nombre').value,
    cantidad: document.getElementById('cantidad').value,
    precio: document.getElementById('precio').value,
  };

  if (editando) {
    productos[indexActual] = producto;
    editando = false;
    indexActual = null;
  } else {
    productos.push(producto);
  }

  localStorage.setItem('productos', JSON.stringify(productos));
  mostrarProductos();
  this.reset();
});

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
