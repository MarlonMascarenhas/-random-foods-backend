const connection = require('../database/connection');

module.exports = {
    async randomSelection(request, response){
        const amount = await (await connection('comidas')).length
        const num = Math.floor(Math.random() * amount + 1);

        const food = await connection('comidas').where('id', num);
        
        return response.json(food);
    }
}