
function eliminarProducto(index) {
  let productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.splice(index, 1);
  localStorage.setItem('productos', JSON.stringify(productos));
  mostrarProductos();
}
