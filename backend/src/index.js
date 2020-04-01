const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

//para desenvolvimento deixar vazio
//para produção inserir o origin
app.use(cors());
// app.use(cors({
    // origin: 'http://site.com'
// }));
app.use(express.json());
app.use(routes)
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
//Aqui estava a rota do início



app.listen(3333);
