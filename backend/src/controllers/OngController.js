const connection = require('../database/connection');
//pacote que vem junto com node para criptografia
const crypto = require('crypto')

module.exports = {
    async index (request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);        
    },

    async create (request, response){   
        const {name, email, whatsapp, city, uf} = request.body;
        //cria um id que é uma string aleatória e converter para string hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');

        //* ela deve aguardar a inserção no bd para retornar o response
        //o node vai esperar o finalizar para continuar
        await connection('ongs').insert({
            id,
            name, 
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
}