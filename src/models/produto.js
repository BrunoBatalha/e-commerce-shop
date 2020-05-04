const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Produto = new Schema({
    nome: {
        type:String,
        required:true
    },
    titulo: {
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
    destaque: {
        type:Boolean
    },
    parcelamento: {
        type:Number,
        max:12,
        required:true
    },
    data: {
        type:Date,
        default:Date.now()
    },
    categoria: {
        type:String,
        required:true
    }, 
    avaliacao: {
        type:Number,
        default:0
    },
    juros: {
        type:Number
    }
});
module.exports = mongoose.model('produtos',Produto);