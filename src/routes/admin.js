const express = require('express');
const router = express.Router();
const pageController = require('../controller/pageController');
const dbController = require('../controller/dbController');
const auth = require('../auth/auth.js');

//rotas de paginas estaticas
router.get('/',pageController.renderHome);
router.get('/login',pageController.renderLogin);
router.get('/sobre',pageController.renderSobre);
router.get('/compra',pageController.renderCompra);
router.get('/boleto',pageController.renderBoleto);

//rotas para consultas no banco
router.post('/salvar',dbController.save);
router.get('/listar',dbController.listar);
router.put('/atualizar/:id',dbController.update);
router.delete('/deletar/:id',dbController.deletar);
router.post('/gerarToken',auth.generateToken);
router.post('/efetuandoCompra',auth.comprar);

module.exports = router; 