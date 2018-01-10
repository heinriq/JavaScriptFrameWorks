//consts
const app = require('./config-express.js')()
const home = require('./Routes/home')(app)
const produtos = require('./Routes/produtos.js')(app)

//set
app.set('view engine', 'ejs')