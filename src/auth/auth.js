'use strict';
const jwt = require('jsonwebtoken');

exports.generateToken = async (req,res) => {
    let token = jwt.sign({id:'id'},'secretKey', { expiresIn: '1d' });
    res.render('pages/index',{token:token})
};
exports.decodeToken = async (token) => {
    let data = jwt.verify(token,'secretKey');
    console.log(data);
    return data;
};
exports.authorize = (req,res,next) => {
    let token = req.headers['authorization'];
    console.log(token);
    if(!token) {
        return res.json({"autenticado":"false"});
    }else{
        jwt.verify(token,'secretKey', (error,decoded) => {
            if(error){
                return res.json({"autenticado":"false"});
            }else{
                return res.json({"autenticado":"true"});
            }
        });
    };
};