console.clear();
console.log("📌 Ejercicio 18 funcionando correctamente");

// Simula un menú en consola que se repite hasta que el usuario elija "salir"
// Opciones: Ver perfil, Editar perfil, Cerrar sesión
// Cada opción debe mostrar un mensaje, y repetir hasta que seleccione salir

let opcion = "ver perfil"; 

while (opcion !== "salir") {
  if (opcion === "ver perfil") {
    console.log("mostrando perfil...");
    opcion = "editar perfil";
  } else if (opcion === "editar perfil") {
    console.log("editando perfil...");
    opcion = "cerrar sesión";
  } else if (opcion === "cerrar sesión") {
    console.log("cerrando sesión...");
    opcion = "salir";
  } else {
    console.log("opción no válida");
    opcion = "salir";
  }
}