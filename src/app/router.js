const express = require("express");
const app = express();
app.use(express.json());

// Importación de módulos
const authRoutes = require('../v1/routes/authRoutes');
const userRoutes = require('../v1/routes/userRoutes');

// Definición de endpoints para cada módulo
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
