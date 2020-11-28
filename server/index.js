const restify = require("restify");

const Server = {

    application: Object,
    //metodo para inica o servidor, e as rotas 
    initRoutes: () => {
        //retorno de promessa
        return new Promise((resolve, reject) => {
            try
            {
                //criando o servidor
                Server.application = restify.createServer({});

                Server.application.use(restify.plugins.queryParser());

                //rotas

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
    //metodo para inicar aplicação
    bootstrap: () => {
        return Server.initRoutes().then(() => Server);
    }
}

module.exports = Server;