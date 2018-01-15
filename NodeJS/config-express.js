module.exports = function(){
    const express = require('express')
    const app = express();
    const bodyParser = require('body-parser')
    const expressValidator = require('express-validator')
    const loader = require('express-load')
    //set
    app.set('view engine', 'ejs')

    app.use(express.static('./public'))
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(expressValidator());
    //Rotas
    loader('Routes').then('Infra').into(app)
    console.log(app.Infra)
    //Middleware
    app.use(function(req,res,next){
        res.status(404).render(err).next()
    });

    app.use(function(err,req,res,next){
        res.status(500).render(err).next()
    });

    return app;
}