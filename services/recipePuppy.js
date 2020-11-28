const axios = require('axios');
const environment = require('../common/environment');

module.exports = {

    //metodo de requisição get recipePuppy
    getRecipePuppy: (params) => {
        return axios.get(`${environment.services.recipePuppy.url}${params}`)
            .then(response=> response.data)
    }
}