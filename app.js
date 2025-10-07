/********************************************************************************************************************************************
* Objetivo: EndPoints referente a API de contatos
* Autor: Weslei Santos
* Data: 30/09/2025
* Versão: 1.0
* Observação: Instalação do Express, Cors e Body-Parser
* npm install express     --save
* npm install cors        --save
* npm install body-parser --save
*******************************************************************************************************************************************/

// Import das dependências da API
const express = require('express');       // Responsável pela API
const cors = require('cors');            // Responsável pelas permissões da API (APP)
const bodyParser = require('body-parser'); // Responsável por gerenciar a chegada dos dados da API com Front-End

// Import do arquivo de funções
const dados = require('./modulo/funcoes');

// Criando uma instância do express
const app = express();

const PORT = process.env.PORT || 10000; // usa porta do Render ou 10000 localmente
app.listen(PORT, () => {
    console.log(`API aguardando requisições na porta ${PORT}...`);
});

// Configuração de permissões (CORS)
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*'); // Servidor de origem
  response.header('Access-Control-Allow-Methods', 'GET'); // Verbos permitidos
  app.use(cors());
  next();
});

// Middleware para interpretar JSON
app.use(express.json());

//1 Rota raiz 
app.get('/', (req, res) => {
  res.status(200).json({
    status: true,
    message: 'API WhatsApp ativa 🚀',
    version: '1.0.0',
    developer: 'Weslei Santos'
  });
});

// 1° EndPoint para listar todos os dados
app.get('/v1/dados', function (request, response) {
  let dadosJSON = dados.getAllDados();
  response.status(dadosJSON.status_code).json(dadosJSON);
});

// 2° EndPoint que retorna usuario pelo numero
app.get('/v1/user/:numero', function (request, response) {
  let user = request.params.numero;
  let usuarios = dados.getPerfilUser(user);
  response.status(usuarios.status_code).json(usuarios);
});

// 3° EndPoint que retorna informacoes sobre os contatos do usuario
app.get('/v1/user/contatos/:numero', function (request, response) {
  let user = request.params.numero;
  let contato = dados.getContatoUser(user);
  response.status(contato.status_code).json(contato);
});

// 4° EndPoint que retorna as mensagens existentes do usuario com todos os contatos
app.get('/v1/user/messages/:numero', function (request, response) {
  let user = request.params.numero;
  let mensagens = dados.getMensagensUser(user);
  response.status(mensagens.status_code).json(mensagens);
});

// 5° EndPoint que retorna as mensagens existentes do usuario com um contato especifico
app.get('/v1/user/message/contato', function (request, response) {
  let user = request.query.user;
  let contato = request.query.contato;
  let mensagens = dados.getMensagensContact(user, contato);
  response.status(mensagens.status_code).json(mensagens);
});

// 6° EndPoint que retorna as mensagens de acordo com uma palavra chave
app.get('/v1/user/message/keyword', function (request, response) {
  let user = request.query.user;
  let contato = request.query.contato;
  let keyword = request.query.keyword;
  let mensagens = dados.getMensagensByKeyword(user, contato, keyword);
  response.status(mensagens.status_code).json(mensagens);
});

// Start na API
app.listen(PORT, function () {
  console.log(`API aguardando requisições na porta ${PORT}...`);
});

