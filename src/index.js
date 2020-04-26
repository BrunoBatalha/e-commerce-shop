const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const admin = require('./routes/admin');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

//Configurações

    //Handlebars
    app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'handlebars');

    //Bodyparser
    app.use(bodyparser.urlencoded({extended:true}));
    app.use(bodyparser.json());

    //Public
    app.use('/', express.static(path.join(__dirname, 'public')));

    //Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb+srv://admin:admin@cluster0-b7bmy.gcp.mongodb.net/dbecommerce?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {
        console.log("Conexão feita com o banco de dados com sucesso");
    }).catch(err => {
        console.log("Erro ao conectar com o banco de dados :"+err)
    });

    //Rotas
    app.use('/',admin);

app.listen(3333,() => {
    console.log("Conexão feita com sucesso...");
});