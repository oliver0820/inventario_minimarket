function buscarProducto() {
  const searchQuery = document.getElementById('search-query').value.toLowerCase();
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  
  const filteredProductos = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(searchQuery)
  );
  
  mostrarProductos(filteredProductos);
}

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

