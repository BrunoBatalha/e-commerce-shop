const express = require('express');
const router = express.Router();
const pageController = require('../controller/pageController');
const dbController = require('../controller/dbController');

//rotas de paginas estaticas
router.get('/',pageController.renderHome);
router.get('/login',pageController.renderLogin);
router.get('/sobre',pageController.renderSobre);

//rotas para consultas no banco
router.post('/salvar',dbController.save);
router.get('/listar',dbController.listar)
router.put('/atualizar/:id',dbController.update);
router.delete('/deletar/:id',dbController.deletar);
router.post('/autenticar',dbController.autenticar);
module.exports = router; 