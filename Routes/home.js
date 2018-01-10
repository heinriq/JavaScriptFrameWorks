 module.exports = function(app){
    
    app.get('/', function(req, res){
        res.send('<h1>Home</h1>')
    });

    return app;
}




