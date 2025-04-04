// Función para buscar productos
function buscarProducto() {
  const searchQuery = document.getElementById('search-query').value.toLowerCase();
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  
  const filteredProductos = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(searchQuery)
  );
  
  mostrarProductos(filteredProductos);
}

// Función para mostrar productos
function mostrarProductos(productos = []) {
  const lista = document.getElementById('producto-lista');
  lista.innerHTML = '';

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

// Función para actualizar productos
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

// Evento del formulario de producto para actualizar o agregar
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
