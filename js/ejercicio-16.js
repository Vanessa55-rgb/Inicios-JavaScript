console.clear();
console.log("📌 Ejercicio 16 funcionando correctamente");

// Simula una encuesta donde el sistema pregunta la calificación del servicio (1 a 5)
// Mientras la calificación no sea 5, sigue preguntando
// Muestra un mensaje de agradecimiento cuando por fin alguien califique con 5

let calificaciones = [3, 4, 2, 5];
let i = 0;

while (i < calificaciones.length) {
  let nota = calificaciones[i];
  if (nota === 5) {
    console.log("gracias por calificar con 5");
    break;
  } else {
    console.log("siguiente intento...");
  }
  i = i + 1;
}