exports.renderHome = async (req,res) => {
    res.render('pages/index');
};
exports.renderLogin = async (req,res) => {
    res.render('pages/login');
};
exports.renderSobre = async (req,res) => {
    res.render('pages/sobre');
};
exports.renderCompra = async (req,res) => {
    res.render('pages/comprar');
}