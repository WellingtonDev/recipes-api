const RecipesRouter = {

    //metodo para obter dados dos serviços, giphy, recipePuppy
    getServices: async (req, res, next)=>{
        res.json({menssage: 'Lista de Receitas' });
    },

    //todas rotas de recipes
    applyRouter: (application) => {
        //declaracao de todas as rotas 
        application.get(`/recipes/`, [RecipesRouter.getServices]);
    }
}

module.exports = RecipesRouter;