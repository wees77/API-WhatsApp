/********************************************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de contatos
 * Autor: Weslei Santos
 * Data: 30/09/2025
 * Versão: 1.0
 * *******************************************************************************************************************************************/

const MESSAGE_ERRO = { status: false, status_code: 500, development: 'Weslei Santos' }

const { json } = require('body-parser')
// Import do arquivo de contatos
const dados = require('./contatos.js')

// Retorna todos os contatos
const getAllDados = function () {
    // Variável base para o cabeçalho da API
    let message = { status: true, status_code: 200, development: "Weslei Santos", users: [] }

    // Validação para tratar se existe dados
    dados['whats-users'].forEach(function (user) {
        message.users.push(user)

    })

    return message
}

// Retorna dados do perfil do usuário
const getPerfilUser = function (number) {
    // Variável base para o cabeçalho da API
    let message = { status: true, status_code: 200, development: "Weslei Santos", perfil: {} }

    // Validação para tratar se existe dados
    dados['whats-users'].forEach(function (user) {
        if (user.number == number) {
            message.perfil = user
        }
    })

    return message
}

// Retorna dados do contato de cada usuário
const getContatoUser = function (number) {
    // Variável base para o cabeçalho da API
    let message = { status: true, status_code: 200, development: "Weslei Santos", contatos: [] }

    // Validação para tratar se existe dados
    dados['whats-users'].forEach(function (user) {
        if (user.number == number) {
            user.contacts.forEach(function (contato) {
                let json = {}
                json.nome = contato.name
                json.foto = contato.image
                json.descricao = contato.description

                message.contatos.push(json)
            })
        }
    })

    return message
}

// Retorna todas as mensagens trocadas de uma determinada conta
const getMensagensUser = function (number) {
    // Variável base para o cabeçalho da API
    let message = { status: true, status_code: 200, development: "Weslei Santos", mensagens: [] }

    // Validação para tratar se existe dados
    dados['whats-users'].forEach(function (user) {
        if (user.number == number) {
            let json = {}
            json.contato = user.contacts

            message.mensagens.push(json)
        }
    })
    return message
}

console.log(getMensagensUser("11987876567"))

module.exports = {
    getAllDados,
    getPerfilUser,
    getContatoUser,
    getMensagensUser
}