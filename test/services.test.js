const giphy = require('../services/giphy');
const recipePuppy = require('../services/recipePuppy');

test('GET Recipe Puppy API', ()=>{
    return recipePuppy.getRecipePuppy('onion,tomato,garlic')
                    .then(response=>{
                        expect(response).toBeDefined()
                    })
  })

test('GET GIPHY API', ()=>{
    return giphy.getGiphy('Basil Tomatoes')
                    .then(response=>{
                        expect(response).toBeDefined()
                        expect(response).toBeInstanceOf(Object)
                    })
  })

