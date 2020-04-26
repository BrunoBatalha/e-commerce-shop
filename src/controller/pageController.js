exports.renderHome = async (req,res) => {
    try{
        await res.render('pages/index');
    }catch(err) {
        console.log("Erro ao renderizar página:"+err);
    }
}