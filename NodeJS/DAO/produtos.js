class ProdutosDAO{
    constructor(connection){
        this._connection = connection
    }

    Get(callback){
        this._connection.query('SELECT * FROM Produtos', callback)
    }

    GetById(id, callback){
        this._connection.query('SELECT * FROM Produtos WHERE ID=?', id, callback)
    }

    Insert(item, callback){
        this._connection.query('INSERT INTO Produtos SET ?', item, callback)
    }
}

module.exports = ProdutosDAO


// module.exports = function ProdutosDAO(connection){
//     this._connection = connection
// }

// ProdutosDAO.prototype.get = function(cb){
//     this._connection.query('SELECT * FROM Produtos', cb)
//     connection.end();
// }


// module.exports = function(connection){
//     const ProdutosDAO = {
//         get: function(cb){
//             connection.query('SELECT * FROM Produtos', cb)
//             connection.end();
//         },

//         getById: function(cb, id){
//             connection.query('SELECT * FROM Produtos WHERE ID= ?', cb)
//             connection.end();
//         }

//     }
//     return ProdutosDAO
// }