//@ts-check

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use('/public', express.static('src/public'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/customer', (req, res) => {
  res.render(path.join(__dirname + '/views/customer/customer.html'));
});

app.get('/product', (req, res) => {
  res.render(path.join(__dirname + '/views/products/product.html'));
});

app.listen(PORT, () => {
  console.log(`the express server is listening at port ${PORT}`);
});
