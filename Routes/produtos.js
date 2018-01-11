module.exports = function(app) {
    const pagina = 'Produtos'
    const conn = require('../config-connection.js')

    app.get('/produtos', function(req,res){
        const connection = conn.connection()

        const produtos = connection.query('SELECT * FROM Produtos', function(err, result){
            res.render(`produtos/lista`, {pagina: pagina, produtos: result})
        });
        connection.end()
    })
    
    app.get('/produtos/:id', function(req, res){
        const connection = conn.connection()

        const id = req.params.id
        console.log(conn.mysql)
        const produtos = connection.query('SELECT * FROM Produtos WHERE ID= ?',id, function(err, result){
            res.render(`produtos/lista`, {pagina: pagina, produtos: result})
        });
        connection.end()
    });

    return app;
}



