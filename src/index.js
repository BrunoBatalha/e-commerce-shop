const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path')

const app = express();

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3333);