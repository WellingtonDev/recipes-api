module.exports = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    services: {
        recipePuppy: {
            url: 'http://www.recipepuppy.com/api/?i='
        },
        giphy: {
            apiKey: 'iNY1TYNTfXKb2DEtYLUeq06YvDuqy42f',
            url: 'http://api.giphy.com/v1/gifs/search',
            limit:1
        }
    }
};