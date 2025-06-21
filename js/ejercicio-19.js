console.clear();
console.log("📌 Ejercicio 19 funcionando correctamente");

// Simula un carrito con productos y precios 
// El usuario puede “agregar producto” o “finalizar compra”
// Cada vez que agrega, suma al total
// Al finalizar, muestra el valor total del carrito

let productos = [10000, 20000, 15000];
let total = 0;

for (let i = 0; i < productos.length; i++) {
  total = total + productos[i];
}
console.log("total del carrito: $" + total);