//consts
const app = require('./config-express.js')()

app.listen(3000, function(){
    console.log(`Escutando a porta 3000`);
});