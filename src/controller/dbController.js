const Produto = require('../models/produto');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

//Cookie

exports.save = async (req,res) => {
    try{
        //-------------VALIDAÇÃO-------------
        
        //Strings
        var erro = ""; 

        if(req.body.nome == null || req.body.nome === undefined || !req.body.nome || req.body.nome.length < 3) {
            erro = "-Verifique o campo de NOME ";
        };
        
        if(req.body.marca == null || req.body.marca === undefined || !req.body.marca || req.body.marca.length < 2) {
            erro += "-Verifique o campo de MARCA ";
        };
        
        if(req.body.titulo == null || req.body.titulo === undefined || !req.body.titulo || req.body.titulo.length < 3) {
            erro += "-Verifique o campo de TITULO ";
        };

        if(req.body.categoria != "computadores" && req.body.categoria != "celulares" && req.body.categoria != "headsets" && req.body.categoria != "perifericos") {

            erro += "-Verifique o campo de CATEGORIA...  Categorias aceitas: 'celulares', 'headsets', 'perifericos' e 'computadores' ";
        };

        
        let nomeExistente = await Produto.find({nome:req.body.nome});
        let marcaExistente = await Produto.find({marca:req.body.marca});
        if(JSON.stringify(nomeExistente) != "[]" && JSON.stringify(marcaExistente) != "[]"){
            erro += "-Já existe um produto com o mesmo NOME e mesma MARCA ";
        }

        //Numbers
        if(req.body.parcelamento == null || req.body.parcelamento === undefined || !req.body.parcelamento || (req.body.parcelamento > 12 && req.body.parcelamento > 0)) {
            erro += "-Verifique o campo de PARCELAMENTO ";
        };
        if(req.body.avaliacao != 0) {
            erro += "-Somente o usuário pode avaliar o produto ";
        };

        //-------------FIM VALIDAÇÃO-------------

        if(erro != "") {
            res.send(erro);
        }else {
        await new Produto(req.body).save();
        res.send("Dados salvos com sucesso: "+req.body);
        }

    }catch(err) {
        res.send("Erro ao salvar: "+err);
    };
};
exports.update = async (req,res) => {
    try{
        const produto = await Produto.findByIdAndUpdate(req.params.id,req.body);
        produto.save();
        res.send("Atualizado com sucesso..."+req.body);
    }catch(err) {
        res.send("Erro ao atualizar: "+err);
    };
};
exports.listar = async (req,res) => {
    try{
        const produtos = await Produto.find();
        res.send(produtos);
    }catch(err) {
        res.send("Erro ao listar: "+err);
    };
};
exports.deletar = async (req,res) => {
    try{
        await Produto.findByIdAndRemove(req.params.id);
        res.send("<center><h1>Dados deletados com sucesso...</h1></center>")
    }catch(err) {
        res.send("Houve um erro a deletar: "+err);
    };
};