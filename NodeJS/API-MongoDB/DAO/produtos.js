let connection = require('../Infra/config-connection')
Photo = connection.Photo;
class PhotoDAO
{
    Post({url, titulo, descricao}) {
        
           
        model = new Photo({
            titulo : titulo,
            descricao : descricao,
            url : url
        });

        model.save(err => {throw err;})
    }

    Get(){
        Photo.find({}, (err, users) => {
            err => {throw err;}
            return users;
        })
    }

    GetById(id){
        Photo.find({_id: id}, (err, res) =>{
            err => {throw err;}
            return res
        })
    }
}