const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const{ page = 1 } = request.query;

        //pegar o primeiro do array [   ]
        const [count] = await connection('incidents')
            .count();
        console.log(count);

        //pegar de 5 em 5 por página
        const incidents = await connection('incidents')
        //apenas com esse join ele sobrepõe o id do incident
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset( (page-1) * 5 )
            //por isso o select não pode ser apenas uma string
            //deve ser um array
            .select(['incidents.*', 
                'ongs.name', 
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        //seria possível pegar no corpo o ong_id, mas
        const{title, description, value} = request.body;
        //o dado do id da ong vem no cabeçalho
        //no headers vem dados da autenticação do usuario, localização
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        
        return response.json({id});
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if(incident.ong_id !== ong_id){
            //código de erro não autorizado
            return response.status(401).json({error: 'Operation not permitted.'});
        }
        const resp = 
        await connection('incidents').where('id', id).delete();

        //código de resposta: no content
        return response.status(204).send();
    },
}