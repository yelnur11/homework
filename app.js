const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./api/routes/userRoutes');
const accountRoutes = require('./api/routes/accountRoutes');
const transactionRoutes = require('./api/routes/transactionRoutes');
const budgetRoutes = require('./api/routes/budgetRoutes');
const tipsRoutes = require('./api/routes/tipsRoutes');
const alertRoutes = require('./api/routes/alertRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/homework');

app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/accounts', accountRoutes);
app.use('/transactions', transactionRoutes);
app.use('/budget', budgetRoutes);
app.use('/tips', tipsRoutes);
app.use('/alerts', alertRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

module.exports = app;