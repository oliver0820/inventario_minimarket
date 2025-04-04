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


