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
const PORT = process.env.PORT || 9090

// Criando uma instância de uma classe do express
const app = express()

// Configuração de permissões
app.use((request, response, next)=>{
    response.header('Acces-Control-Allow-Origin', '*') // Servidor de origem
    response.header('Acces-Control-Allow-Methods', 'GET') // Verbos permitidos na API
    response.header('Access-Control-Allow-Origin', '*') // Servidor de origem
    response.header('Access-Control-Allow-Methods', 'GET') // Verbos permitidos na API 0efd7ff (Atualização API WhatsApp)
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

//EndPoint que retorna usuario pelo numero
app.get('/v1/user/:numero', function(request, response){
    //Variavel que recebe o parametro da url
        let user = request.params.numero

            //Pesquisa na função os usuarios
                let usuarios = dados.getPerfilUser(user)
                    //Retorna o status code e o JSON
                        response.status(usuarios.status_code).json(usuarios)
                        })

                        //EndPoint que retorna informacoes sobre os contatos do usuario
                        app.get('/v1/user/contatos/:numero', function(request, response){
                            //Variavel que recebe o parametro da url
                                let user = request.params.numero

                                    //Pesquisa na função os usuarios
                                        let contato = dados.getContatoUser(user)
                                            //Retorna o status code e o JSON
                                                response.status(contato.status_code).json(contato)
                                                })

                                                //EndPoint que retorna as mensagens existentes do usuario com todos os contatos
                                                app.get('/v1/user/messages/:numero', function(request, response){
                                                    //Variavel que recebe o parametro da url
                                                        let user = request.params.numero

                                                            //Pesquisa na função os usuarios
                                                                let mensagens = dados.getMensagensUser(user)
                                                                    //Retorna o status code e o JSON
                                                                        response.status(mensagens.status_code).json(mensagens)
                                                                        })

                                                                        //EndPoint que retorna as mensagens existentes do usuario com um contato especifico
                                                                        app.get('/v1/user/message/contato', function(request, response){
                                                                            //Variavel que recebe o parametro via Query
                                                                                let user = request.query.user
                                                                                    let contato = request.query.contato

                                                                                        //Pesquisa na função
                                                                                            let mensagens = dados.getMensagensContact(user, contato)
                                                                                                //Retorna o status code e o JSON
                                                                                                    response.status(mensagens.status_code).json(mensagens)
                                                                                                    })

                                                                                                    //EndPoint que retorna as mensagens de acordo com uma palavra chave
                                                                                                    app.get('/v1/user/message/keyword', function(request, response){
                                                                                                        //Variavel que recebe o parametro via Query
                                                                                                            let user = request.query.user
                                                                                                                let contato = request.query.contato
                                                                                                                    let keyword = request.query.keyword

                                                                                                                        //Pesquisa na função
                                                                                                                            let mensagens = dados.getMensagensByKeyword(user, contato, keyword)
                                                                                                                                //Retorna o status code e o JSON
                                                                                                                                    response.status(mensagens.status_code).json(mensagens)
                                                                                                                                    })

// Start na API
app.listen(PORT, function(){
    console.log('API aguardando requisições ...')
})