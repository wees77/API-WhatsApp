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

// 1- Retorna todos os contatos
const getAllDados = function () {
    // Variável base para o cabeçalho da API
    let message = { status: true, status_code: 200, development: "Weslei Santos", users: [] }

    // Validação para tratar se existe dados
    dados['whats-users'].forEach(function (user) {
        message.users.push(user)

    })

    return message
}

// 2- Retorna dados do perfil do usuário
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

// 3- Retorna dados do contato de cada usuário
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

// 4- Retorna todas as mensagens trocadas de uma determinada conta
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


// 5- Mensagens de um usuário com contato específico
const getMensagensContact = function (number, contactNumber) {
    let user = dados['whats-users'].find(u => u.number === number)
    if (!user) return MESSAGE_ERRO

    let contact = user.contacts.find(c => c.number === contactNumber)
    if (!contact) return MESSAGE_ERRO

    return {
        status: true,
        status_code: 200,
        development: 'Weslei Santos',
        contato: [{
            nome: contact.name,
            numero: contact.number,
            mensagens: contact.messages
        }]
    }
}

const getMensagensByKeyword = function (number, contactNumber, keyword) {
    let message = { status: true, status_code: 200, development: 'Weslei Santos', contato: [] }

    dados['whats-users'].forEach(function (item) {
        if (item.number == number) {
            item.contacts.forEach(function (contato) {
                if (contato.number == contactNumber) {
                    contato.messages.forEach(function (mensagem) {
                        if (mensagem.content.includes(keyword)) {

                            message.contato.push(mensagem.content)
                        }
                    })
                }
            })
        }
    })

    if (message.contato.length > 0) {
        return message
    } else {
        return MESSAGE_ERRO
    }


}

module.exports = {
    getAllDados,
    getPerfilUser,
    getContatoUser,
    getMensagensUser,
    getMensagensContact,
    getMensagensByKeyword
}

