const express = require('express');
const router = express.Router();
const pageController = require('../controller/pageController');
const dbController = require('../controller/dbController');

//rotas de paginas estaticas
router.get('/',pageController.renderHome);
router.get('/login',dbController.renderLogin);
router.get('/sobre',dbController.renderSobre);
router.get('/comprar',dbController.renderComprar);

//rotas para consultas no banco
router.post('/salvar',dbController.save);
router.get('/listar',dbController.listar)
router.put('/atualizar/:id',dbController.update);
router.delete('/deletar/:id',dbController.deletar);

module.exports = router; 