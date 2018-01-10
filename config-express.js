module.exports = function(){
    const express = require('express')
    const app = express();
    
    //set
    app.set('view engine', 'ejs')

    //Rotas
    require('./Routes/home')(app)
    require('./Routes/produtos.js')(app)
    
    return app;
}