const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const empleadosRoutes = require('./src/routes/empleados.routes');

const app = express();
const PORT = process.env.PORT || 3000; // Puerto por defecto 3000

mongoose.connect('mongodb://127.0.0.1/usuarios_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });

app.use(bodyParser.json());

app.use('/api', empleadosRoutes);

app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({ error: 'Error interno del servidor.' });
});

const server = app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});

module.exports = app;