
const firebaseConfig = {
  apiKey: "AIzaSyAJQxPN1oyrKOGnlAXQ6Tbr7wjsAxXf-44",
  authDomain: "despedida-soltera-vicky.firebaseapp.com",
  databaseURL: "https://despedida-soltera-vicky-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "despedida-soltera-vicky",
  storageBucket: "despedida-soltera-vicky.firebasestorage.app",
  messagingSenderId: "327665852322",
  appId: "1:327665852322:web:923df803573c7e23795cfb"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Escuchar cambios en tiempo real
db.ref("imagen").on("value", (snapshot) => {
  let numero = snapshot.val();
  if (numero) {
    document.getElementById("imagen").src = "images/a" + numero + ".jpg";
  }
});

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
