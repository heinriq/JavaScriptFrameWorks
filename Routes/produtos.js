module.exports = function(app) {
    app.get('/produtos', function(req, res){
        const pagina = `Produtos`
        const produtos = [{item:`item 3`}, {item:`Item 4`}]
        
        res.render(`produtos/lista`, {pagina: pagina, produtos: produtos})
    });

    return app;
}



