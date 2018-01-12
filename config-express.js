module.exports = function(){
    const express = require('express')
    const app = express();
    const bodyParser = require('body-parser')
    //set
    app.set('view engine', 'ejs')

    app.use(express.static('./public'))
    app.use(bodyParser.urlencoded({extended:true}));
    //Rotas
    require('./Routes/home')(app)
    require('./Routes/produtos.js')(app)
    
    //Middleware
    app.use(function(req,res,next){
        res.status(404).render(err).next()
    });

    app.use(function(err,req,res,next){
        res.status(500).render(err).next()
    });

    return app;
}