const express = require('express')
const app = express();

app.get('/', function(req, res){
    res.send('<h1>Home</h1>')
}) 

app.get('/produtos', function(req, res){
    var pagina = `Produtos`

    res.send(`
    <html>
        <head>
            <title> Casa do Codigo - ${pagina}</title>
        </head>
        <body>
            <h1>${pagina}</h1>
        </body>`)
})

app.listen(3000, function(){
    console.log(`Escutando a porta 3000`);
})