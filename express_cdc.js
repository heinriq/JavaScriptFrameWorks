const express = require('express')
//const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.send('<h1>Home</h1>')
}) 

app.get('/produtos', function(req, res){
    const pagina = `Produtos`
    const produtos = [{item:`item 1`}, {item:`Item 2`}]
    res.render(`produtos/lista`, {pagina: pagina, produtos: produtos})
})

app.listen(3000, function(){
    console.log(`Escutando a porta 3000`);
})