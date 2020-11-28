const axios = require('axios');
const environment = require('../common/environment');

module.exports = {

    //metodo de requisição get recipePuppy
    getRecipePuppy: (params) => {
        console.log(`${environment.services.recipePuppy.url}${params}`);
        return axios.get(`${environment.services.recipePuppy.url}${params}`);
    }
}