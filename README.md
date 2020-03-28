# testejs
JS

Instalar homebrew (win: chocolatey)
Instalar node lts
Instalar npm
Instalar nvm
Instalar VS Code
    Tema Dracula
    ícones Material Icon theme
Arquitetura da aplicacao
    o que é back-end?
        Regras de negócio
        Conexao bd
        envio de e-mail
        comunicacao com webservices
        autenticacao de usuario
        criptografia e segurança
    como criar uma API RESTFUL
    Front-end
        web
        mobile
        outros serviços
    JSON - o que é?

Verificar versões
    node -v
    npm -v
    nvm -v
Inicializar
    npm init -y
Abrir pasta no VS code
package.json - armazena as infors das dependencias que forem instaladas
O que é rota    
Instalar o Express - mini framework de node para desenvolvimento web - para lidar com rotas
    npm install express
Criar pasta backend
Criar o arquivo index.js

const express = require('express');
const app = express();
app.listen(3333)

Rodar
    node index.js
Abrir browser: localhost:3333

app.get('/', (request, response) => {
    //return response.send("Hello World");
    return response.json({
        evento: 'Hello Worlddd!!',
        nome: 'Fernando'
    });
})

React
Abordagem tradicional - retorna HTML
Abordagem SPA - Single Page Application
    O back-end só retorna JSON
    Fica sempre na mesma página
    sem responsabilidade na apresentação d página

executar npx - executa um pacote externa sem a necessidade de instalar
npx create-react-app frontend
npm start
localhost:3000
Abrir o App.js
    Mudar o texto para Hello World

React Native
    Não converte o código para o código nativo
    Ele utiliza um motor de JSCore- ele é implementado dentro do app
Xamarin converte o código

Expo - framework para utilizar, conjunto de bibliotecas para utilizar camera, gps
    feito para apps pequenos e menos escaláveis
    
==
Rotas
Métodos
    * GET: buscar/listar uma informação do back-end
    * POST: criar uma informação no back-end
    * PUT: alterar uma informação do back-end
    * DELETE: deletar uma informação do back-end
Instalar o Insomnia para poder interagir com o back-end no POST, PUT, DELETE

mudar o .get para .post

app.post('/users', (request, response) => {
    return response.json({
        evento: 'Hello Worlddd!!',
        nome: 'Fernando'
    });
})

Tipos de parâmetros:
    * Query Params: parâmetros nomeados enviados na rota após ? (Filtros, paginação)
    * Route Params: parâmetros utilizados para identificar recursos
    * Request Body:  corpo da requisição, utilizado para criar ou alterar recursos

Query
http://localhost:3333/users?name=Fernando
http://localhost:3333/users?page=2&name=Fernando&idade=18 

Route
app.get('/users/:id', (request, response) => {
    return response.json({
        evento: 'Hello Worlddd!!',
        nome: 'Fernando'
    });
})
http://localhost:3333/users/1

 app.get('/users', (request, response) => {
    const params = request.query;
    console.log(params);
    return response.json({
        evento: 'Hello Worlddd!!',
        nome: 'Fernando'
    });
})
http://localhost:3333/users?name=Fernando&idade=18
no console sai:
{ name: 'Fernando', idade: '18' }

app.get('/users/:id', (request, response) => {
    const params = request.params;
    console.log(params);
    return response.json({
        evento: 'Hello Worlddd!!',
        nome: 'Fernando'
    });
})
http://localhost:3333/users/456
no console sai { id: '456' }

Request Body
depois da inicialização
    app.use(express.json());
e então
    app.post('/users', (request, response) => {
        const body = request.body;
        console.log(body);
        return response.json({
            evento: 'Hello Worlddd!!',
            nome: 'Fernando'
        });
    })
no insomnia:
post http://localhost:3333/users
body json:
{
	"usuario" :"Fernando",
	"idade"   : 18
}

Instalar o NODEMON
    npm install nodemon -D
-D somente para quando estiver desenvolvendo, é uma dependencia de desenvolvimento
no package.json
"scripts": {
    "start": "nodemon index.js"
  },
depois dar um npm start 

Bancos de dados
SQL : MYSQL, 
NoSQL: MongoDB, CouchDB, etc

SQLITE
Instalar o Driver: pacote oficial para node
SELECT * FROM users

Query Builder: utilizando JS
table('users').select('*').where() 

Instalar Knex - Query builder js
npm install knex
npm install sqlite3
npx knex init

criar pasta src e jogar o index.js
mudar o package.json - nodemon src/index.js
criar dentro do src o routes.js

const express = require('express');
const routes = express.Router();
routes.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json({
        evento: 'Hello Worlddd!!',
        nome: 'Fernando H'
    });
})
module.exports = routes;

no index.js
const express = require('express');
const routes = require('./routes');
const app = express();
app.use(express.json());
app.use(routes)

e no knexfile.js
development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    }
  },
  criar a pasta database dentro do src

Entidades
   - ONG
   - Caso (Incident)
   Funcionalidades
   - Login de ONG
   - Logout
   - Cadastro de ONG
   - Cadastrar novos Casos
   - Deletar casos
   - Listar casos específicos de uma ong
   - Listar todos os casos
   - Entrar em contato com a ONG

Criar as tabelas no banco
Knex migrations - manter o histórico de alterações, deleções, etc
Migration CLI
dentro da database criar a pasta chamada migrations
no knexfile.js 


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

npx knex migrate:make create_ongs
vai dar um warning no sqlite: 
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs http://knexjs.org/#Builder-insert).

mudar o knexfile
useNullAsDefault: true,

na migration criada:

//criacao da tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};
//se algo der errado
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
rodar com 
npx knex migrate:latest

