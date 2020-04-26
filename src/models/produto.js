const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Produto = new Schema({
    nome: {
        type:String,
        required:true
    },
    marca: {
        type:String,
        required:true
    },
    preco: {
        type:Number,
        required:true
    },
    categoria: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('produtos',Produto);