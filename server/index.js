const restify = require("restify");

const Server = {

    application: Object,
    //metodo para inica o servidor, e as rotas 
    initRoutes: (routers) => {
        //retorno de promessa
        return new Promise((resolve, reject) => {
            try
            {
                //criando o servidor
                Server.application = restify.createServer({});

                Server.application.use(restify.plugins.queryParser());

                //interando rotas, bucando e passando o servidor, por parametro
                for (let router of routers) {
                    //metod usado todas as rotas
                    router.applyRouter(Server.application);
                }

                //servidor ouvindo porta 3000
                Server.application.listen(3000, () => {
                    resolve(Server.application);
                });
            }
            catch(error)
            {
                reject(error);
            }
        });
    },
    //metodo para inicar aplicação, obtem array de rotas
    bootstrap: (routers = []) => {
        //array de rotas passadas por parametro
        return Server.initRoutes(routers).then(() => Server);
    }
}

module.exports = Server;