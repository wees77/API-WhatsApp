/********************************************************************************************************************************************
 * Objetivo: EndPoints referente a API de contatos
 * Autor: Weslei Santos
 * Data: 30/09/2025
 * Versão: 1.0
 * *
 * Observação: Instalação do Express, Cors e Body-Parser
 * npm install express     --save
 * npm install cors        --save
 * npm install body-parser --save
 * *******************************************************************************************************************************************/

// Import das dependências da API
const express    = require('express')       // Responsável pela API
const cors       = require('cors')         // Responsável pelas permissões da API (APP)
const bodyParser = require('body-parser') // Responsável por gerenciar a chegada dos dados da API com Front-End

// Import do arquivo de funções
const dados = require('./modulo/funcoes')

// Retorna a porta do servidor atual, ou colocamos uma porta local
const PORT = process.PORT || 9090

// Criando uma instância de uma classe do express
const app = express()

// Configuração de permissões
app.use((request, response, next)=>{
    response.header('Acces-Control-Allow-Origin', '*') // Servidor de origem
    response.header('Acces-Control-Allow-Methods', 'GET') // Verbos permitidos na API
    // Carrega as configuraçãoes do CORS da API
    app.use(cors())
    next() // Próximo, carregar os próximos endpoints
})

// Request -> chegada de dados na API
// Response -> retorno de dados na API

//EndPoint para listar todos os dados
app.get('/v1/dados', function(request, response){
    let dadosJSON = dados.getAllDados()

    response.status(dadosJSON.status_code)
    response.json(dadosJSON)
})


// Start na API
app.listen(PORT, function(){
    console.log('API aguardando requisições ...')
})