module.exports = function(){
    const express = require('express')
    const app = express();
    
    //set
    app.set('view engine', 'ejs')

    //Middleware
    app.use(express.static('./public'))

    //Rotas
    require('./Routes/home')(app)
    require('./Routes/produtos.js')(app)
    
    return app;
}