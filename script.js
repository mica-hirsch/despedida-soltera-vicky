
let historial = []; // guarda las últimas imágenes
const LIMITE = 20;  // cuántas evitar repetir

function cambiarImagen() {
  let numero;

  do {
    numero = Math.floor(Math.random() * 51) + 1;
  } while (historial.includes(numero));

  // Añadir al historial
  historial.push(numero);

  // Mantener solo las últimas 20
  if (historial.length > LIMITE) {
    historial.shift();
  }

  // Cambiar imagen
  let ruta = "images/a" + numero + ".jpg";
  document.getElementById("imagen").src = ruta;
}