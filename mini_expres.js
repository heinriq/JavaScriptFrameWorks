var http = require('http');


var server = http.createServer(function(request, response){
    
    var router = []
    router['/produtos'] = '<h1>Produtos</h1>'
    router['/'] = '<h1>Home</h1>'

    console.log(router);
    if(router[request.url])
        response.end(router[request.url]);
    else{
        response.writeHead(404)
        response.end('404');
    }
        
});

server.listen(3001, 'localhost');
console.log(`server up`);
