module.exports = function(app) {
    const pagina = 'Produtos'
    const conn = require('../config-connection.js')
    const ProdutosDAO = require('../DAO/produtos')

    app.get('/produtos', function(req,res){
        const connection = conn.connection()
        const produtosDAO = new ProdutosDAO(connection);

        produtosDAO.Get((err, result) => {
            res.render('produtos/lista', {pagina: pagina, produtos: result})
        });
    });
    
    app.get('/produtos/form', function(req,res){
        res.render('produtos/form', {pagina: pagina})
    })

    app.get('/produtos/:id', function(req, res){
        const connection = conn.connection()
        const produtosDAO = new ProdutosDAO(connection);

        produtosDAO.GetById(req.params.id, (err, result) =>
            res.render(`produtos/lista`, {pagina: pagina, produtos: result})
        );
    });

    app.post('/produtos', function(req, res){
        const connection = conn.connection()
        const produtosDAO = new ProdutosDAO(connection);
        
        const produto = req.body

        produtosDAO.Insert(produto, function (err){
            res.send(produto)
        });
    });

    return app;
}



