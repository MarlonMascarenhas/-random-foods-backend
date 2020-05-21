const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name, descricao, img, ingredients, video }  = request.body;
        
        var ingredientes = ingredients.toString();
        
        await connection('comidas').insert({
            name,
            descricao,
            img,
            ingredientes,
            video
        })
        
        
        return response.json({retorno: 'connection successful'})
    },

    async index(request, response){
        const comidas = await connection('comidas').select('*')
        
        return response.json(comidas);
    },

}