const express = require('express');
const app = express();
const port = 3000;

// Обработчик для главной страницы
app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

// Обработчик для другой страницы
app.get('/about', (req, res) => {
  res.send('О нас');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
