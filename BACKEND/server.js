// server.js
// Importar módulos necesarios
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// ruta para el login

//ruta para registrar un usuario

//ruta para obtener todos los usuarios

//ruta para obtener un usuario por id

//ruta para actualizar un usuario por id

//ruta para recuperar contraseña

// ruta para  Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});