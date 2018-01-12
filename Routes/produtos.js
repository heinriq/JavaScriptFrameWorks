module.exports = function(app) {
    const pagina = 'Produtos'
    const conn = app.Infra
    const ProdutosDAO = require('../DAO/produtos')

    app.get('/produtos', function(req,res){
        const connection = app.Infra.configConnection()
        const produtosDAO = new ProdutosDAO(connection);

        
        produtosDAO.Get((err, result) => {
            res.format({
                html: () => res.render('produtos/lista', {pagina: pagina, produtos: result}),
                json: () => res.send({ result })
            })
            
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
         
        req.assert('titulo', 'Titulo e obrigatorio').notEmpty()
        req.assert('preco', 'Preco precisa ser numerico').isFloat()

        const errors = req.validationErrors()
        if(!errors){
            produtosDAO.Insert(req.body, function (err){
                res.redirect('/produtos')
            });
        }else{
            res.send(errors);
        }
    });

    return app;
}



