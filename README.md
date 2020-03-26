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
Instalar o Express - mini framework de node para desenvolvimento web
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
    
