module.exports = function(){
    const express = require('express')
    const app = express();
    app.listen(3000, function(){
        console.log(`Escutando a porta 3000`);
    });
    return app;
}