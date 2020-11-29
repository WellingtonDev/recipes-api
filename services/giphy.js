const axios = require('axios');
const environment = require('../common/environment');

module.exports = {

    //metodo de requisição get giphy
    getGiphy: (param) => {
        return axios.get(`${environment.services.giphy.url}?api_key=${environment.services.giphy.apiKey}&q=${param}&limit=${environment.services.giphy.limit}`).then(response => response.data.data[0] );
    }
}