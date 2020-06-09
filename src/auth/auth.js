'use strict';
const jwt = require('jsonwebtoken');
const luhn = require('luhn')

exports.generateToken = async (req,res) => {
    let token = jwt.sign({id:'id'},'secretKey', { expiresIn: '2d' });
    res.render('pages/index',{token:token});
};
exports.comprar = async (req,res,next) => {
    let token = req.headers['authorization'];

    if(!token) {
        return res.json({resultado:"autenticacaoErro"});
    }else{
        jwt.verify(token,'secretKey', (error,decoded) => {
            if(error){
                return res.json({resultado:"autenticacaoErro"});
            }else{
                let nCartao  = req.body.numeroCartao;
                let numeroCartao = nCartao.replace(/\s/g,'');

                if(luhn.validate(numeroCartao)) {
                    return res.json({resultado:"sucesso"});
                }else{
                    return res.json({resultado:"cartaoInvalido"});
                }
            }
        });
    }; 
};