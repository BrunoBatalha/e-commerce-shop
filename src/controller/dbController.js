const Produto = require('../models/produto');


exports.save = async (req,res) => {
    try{
        const produto = await new Produto(req.body).save();
        res.send("Dados salvos com sucesso: "+produto);
    }catch(err) {
        res.send("Erro ao salvar: "+err);
    }
};
exports.update = async (req,res) => {
    try{
        const produto = await Produto.findByIdAndUpdate(req.params.id,req.body);
        produto.save();
        res.send("Atualizado com sucesso..."+req.body);
    }catch(err) {
        res.send("Erro ao atualizar: "+err);
    }
};
exports.listar = async (req,res) => {
    try{
        const produtos = await Produto.find();
        res.send(produtos);
    }catch(err) {
        res.send("Erro ao listar: "+err);
    }
}
exports.deletar = async (req,res) => {
    try{
        await Produto.findByIdAndRemove(req.params.id);
        res.send("Dados deletados com sucesso...")
    }catch(err) {
        res.send("Houve um erro a deletar: "+err);
    }
}