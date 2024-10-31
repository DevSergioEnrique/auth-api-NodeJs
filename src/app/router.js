const express = require("express");
const app = express();

// Importación de módulos
const authRoutes = require('../v1/routes/authRoutes');
const userRoutes = require('../v1/routes/userRoutes');
const demoRoutes = require('../v1/routes/demoRoutes');

// Definición de endpoints para cada módulo
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1', demoRoutes);

module.exports = app;
