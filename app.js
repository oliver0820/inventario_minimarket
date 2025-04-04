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


