const express = require('express');
const app = express();
/**
 * Rota / Recurso
 * 
 */

/**
 * Métodos HTTP
 * 
 * GET: buscar/listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação do back-end
 * DELETE: deletar uma informação do back-end
 */
/** Tipos de parâmetros:
 * Query Params: parâmetros nomeados enviados na rota após ? (Filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body:  
 */
app.get('/users', (request, response) => {
    return response.json({
        evento: 'Hello Worlddd!!',
        nome: 'Fernando'
    });
})

app.listen(3333);
