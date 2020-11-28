const server = require("./server");
const recipesRouter = require("./recipes/recipes.router");

//Methodo bootstrap inicia o servidor
server.bootstrap([recipesRouter])
    .then(server=>{
        console.log('%s listening at %s', server.application.name, server.application.url);
    })
    .catch(error=>{
        console.log('Server failed to start');
        console.error(error);
        process.exit(1);
    });