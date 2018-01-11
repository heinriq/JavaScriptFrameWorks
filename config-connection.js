const mysql = require('mysql')

function connection(){

    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password: 'caelum',
        database: 'casaDoCodigo'
    });
    
}

module.exports = {connection:connection, mysql:mysql}