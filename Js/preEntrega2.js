
let productoDeseado = prompt("¿Qué producto quiere comprar?");

function Producto(nombre, precio, cantidad, categoria, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.categoria = categoria;
    this.id = id;
}

let productos = [];

productos.push(new Producto("Gomitas", 10, 1000, "Golosionas", 1));
productos.push(new Producto("Caramelos", 12, 1500, "Golosionas", 2));
productos.push(new Producto("Chicles", 20, 1250, "Golosionas", 3));
productos.push(new Producto("Milka", 250, 200, "Chocolates", 4));
productos.push(new Producto("Block", 150, 500, "Chocolates", 5));
productos.push(new Producto("Marroc", 300, 100, "Chocolates", 6));
productos.push(new Producto("CocaCola", 200, 30, "Bebidas", 7));
productos.push(new Producto("Pritty", 180, 30, "Bebidas", 8));
productos.push(new Producto("Sprite", 200, 30, "Bebidas", 9));
productos.push(new Producto("Peluches", 25, 800, "Regaleria", 10));
productos.push(new Producto("Termos", 25, 1000, "Regaleria", 11));
productos.push(new Producto("Vasos", 25, 400, "Regaleria", 12));

productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

let productoEncontrado = productos.find(producto => producto.nombre === productoDeseado);

if (productoEncontrado) {
    let total = productoEncontrado.precio;
    alert(`El producto ${productoEncontrado.nombre} está preparado para ir a su domicilio. Total a pagar: $${total}. ¡Gracias por su compra, vuelva pronto!`);
  } else {
    alert("Producto no disponible(Sin Stock).");
  }