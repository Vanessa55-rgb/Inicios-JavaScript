console.clear();
console.log("📌 Ejercicio 9 funcionando correctamente");

// En una aplicación bancaria
// Si la cuenta tiene menos de $10.000, muestra “Saldo insuficiente”
// Si tiene entre $10.000 y $1.000.000, muestra “Saldo moderado”
// Si tiene más de $1.000.000 o tiene tarjeta premium, muestra “Cliente preferencial”

let saldo = 900000;
let tarjetaPremium = false;

if (saldo < 10000) {
  console.log("saldo insuficiente");
} else if (saldo <= 1000000) {
  console.log("saldo moderado");
} else {
  if (tieneTarjetaPremium === true) {
    console.log("cliente preferencial");
  } else if (saldo > 1000000) {
    console.log("cliente preferencial");
  } else {
    console.log("saldo alto");
  }
}