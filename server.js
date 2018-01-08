const express = require('express');

const app = express();

const PORT = 8080;

app.set('view engine', 'pug');

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('index');
  // res.send('Hello World!');
});

app.listen(PORT, (err) => {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log(`Platzigram escuchando en el puerto ${PORT}`);
});