mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/API-FOTOS');

let photoSchema = new mongoose.Schema({
    _id: String,
    titulo: String,
    descricao: String,
    url: String
});

let Photo = mongoose.model('Photo', photoSchema)
module.exports = { Mongoose: mongoose, Photo: Photo}
