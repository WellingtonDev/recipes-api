const server = require("./server");

//Methodo bootstrap inicia o servidor
server.bootstrap()
    .then(server=>{
        console.log('%s listening at %s', server.application.name, server.application.url);
    })
    .catch(error=>{
        console.log('Server failed to start');
        console.error(error);
        process.exit(1);
    })