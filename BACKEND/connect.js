import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hahahahaha",  // Asegúrate de usar la contraseña correcta
  database: "aplicacion"
});

// Manejo del error en la conexión
db.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err.stack);
    return;  // Evita continuar si la conexión falla
  }
  console.log('Conectado a MySQL con ID:', db.threadId);
});
