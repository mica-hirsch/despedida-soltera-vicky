const firebaseConfig = {
  apiKey: "AIzaSyAJQxPN1oyrKOGnlAQ6Tbr7wjsAxXf-44",
  authDomain: "despedida-soltera-vicky.firebaseapp.com",
  databaseURL: "https://despedida-soltera-vicky-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "despedida-soltera-vicky",
  storageBucket: "despedida-soltera-vicky.firebasestorage.app",
  messagingSenderId: "327665852322",
  appId: "1:327665852322:web:923df803573c7e23795cfb"
};

// Inicializar Firebase (VERSIÓN CORRECTA con scripts)
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// ESCUCHAR CAMBIOS EN TIEMPO REAL
db.ref("imagen").on("value", (snapshot) => {
  let numero = snapshot.val();

  if (numero) {
    document.getElementById("imagen").src = "images/a" + numero + ".jpg";
  }
});

// Evitar repetición
let historial = [];
const LIMITE = 20;

// BOTÓN
function cambiarImagen() {
  let numero;

  do {
    numero = Math.floor(Math.random() * 51) + 1;
  } while (historial.includes(numero));

  historial.push(numero);

  if (historial.length > LIMITE) {
    historial.shift();
  }

  // 🔥 GUARDAR EN FIREBASE (esto hace que TODOS lo vean)
  db.ref("imagen").set(numero);
}
