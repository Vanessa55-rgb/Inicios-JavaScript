console.clear();
console.log("📌 Ejercicio 10 funcionando correctamente");

// Un restaurante ofrece menús dependiendo del día de la semana. Escribe una lógica que, según el día, muestre qué menú hay disponible 

let dia = "martes";

if (dia === "lunes") {
  console.log("menu de pasta");
} else if (dia === "martes") {
  console.log("menu de pollo");
} else if (dia === "miércoles") {
  console.log("menu de pescado");
} else if (dia === "jueves") {
  console.log("menu de carne");
} else if (dia === "viernes") {
  console.log("menu especial");
} else if (dia === "sábado") {
  console.log("menu parrilla");
} else if (dia === "domingo") {
  console.log("menu familiar");
} else {
  console.log("dia invalido");
}