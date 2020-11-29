const giphy = require('../services/giphy');
const recipePuppy = require('../services/recipePuppy');

const RecipesRouter = {

    //metodo para obter dados de serviços, giphy, recipePuppy
    getServices: async (req, res, next)=>{
        try
        {
            let params   = req.query.i;
            //retorno de ingredientes
            let response = await recipePuppy.getRecipePuppy(params);
            //retorno de array de promessas, ingreditentes com giphy
            let recipes  = response.results.map(async(ingredient)=>{
            //buscando giphy com titulo do ingreditente
            let result   = await giphy.getGiphy(ingredient.title);
               return {
                    title: ingredient.title,
                    link: ingredient.href,
                    ingredients: ingredient.ingredients.split(','),
                    gif: result.url
               }
            });

            let recipesFull = {
                keywords: params.split(','),
                recipes: []
            }

            Promise.all(recipes).then(result=>{
                recipesFull.recipes = result
                res.json(recipesFull)
            });
        }
        catch(error)
        {
            console.error(error);
            res.send(500, {mensage: "Estamos com instabilidade."});
        }
    },

    //todas rotas de recipes
    applyRouter: (application) => {
        //declaração de todas as rotas 
        application.get(`/recipes/`, [RecipesRouter.getServices]);
    }
}

module.exports = RecipesRouter;