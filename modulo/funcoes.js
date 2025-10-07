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

<<<<<<< HEAD
// 1- Retorna todos os contatos
=======
// Retorna todos os contatos
>>>>>>> ea910bf35a9a3c20701a75cbff1772e674f7818d
const getAllDados = function () {
    // Variável base para o cabeçalho da API
    let message = { status: true, status_code: 200, development: "Weslei Santos", users: [] }

    // Validação para tratar se existe dados
    dados['whats-users'].forEach(function (user) {
        message.users.push(user)

    })

    return message
}

<<<<<<< HEAD
// 2- Retorna dados do perfil do usuário
=======
// Retorna dados do perfil do usuário
>>>>>>> ea910bf35a9a3c20701a75cbff1772e674f7818d
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

<<<<<<< HEAD
// 3- Retorna dados do contato de cada usuário
=======
// Retorna dados do contato de cada usuário
>>>>>>> ea910bf35a9a3c20701a75cbff1772e674f7818d
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

<<<<<<< HEAD
// 4- Retorna todas as mensagens trocadas de uma determinada conta
=======
// Retorna todas as mensagens trocadas de uma determinada conta
>>>>>>> ea910bf35a9a3c20701a75cbff1772e674f7818d
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

<<<<<<< HEAD

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
=======
console.log(getMensagensUser("11987876567"))
// Retornatodas as mensagens trocadas de um usuário com um contato específico 
const getMensagensContact = function(number, contactNumber){
     // Variável base para o cabeçalho da API
    let message = {status: true, status_code: 200, development: 'Weslei Santos', contato: []}

            // Validação para tratar se existe dados
            dados.contatos['whats-users'].forEach(function(item){
                    if(item.number == number){
                                item.contacts.forEach(function (contatos){
                                                if(contatos.number == contactNumber){
                                                                    let json = {}
                                                                                        json.nome = contatos.name
                                                                                                            json.numero = contatos.number
                                                                                                                                json.mensagens = contatos.messages

                                                                                                                                                    message.contato.push(json)
                                                                                                                                                                    }
                                                                                                                                                                                   
                                                                                                                                                                                               })
                                                                                                                                                                                                       }
                                                                                                                                                                                                           })

                                                                                                                                                                                                               if(message.contato.length > 0){
                                                                                                                                                                                                                       return message
                                                                                                                                                                                                                           }else{
                                                                                                                                                                                                                                   return MESSAGE_ERRO
                                                                                                                                                                                                                                       }
                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                
const getMensagensByKeyword = function(number, contactNumber, keyword){
        let message = {status: true, status_code: 200, development: 'Weslei Santos', contato: []}

            dados.contatos['whats-users'].forEach(function(item){
                    if(item.number == number){
                                item.contacts.forEach(function(contato){
                                                if(contato.number == contactNumber){
                                                                    contato.messages.forEach(function(mensagem){
                                                                                            if(mensagem.content.includes(keyword)){
                                                                                                                        
                                                                                                                                                    message.contato.push(mensagem.content)
                                                                                                                                                                            }
                                                                                                                                                                                                })
                                                                                                                                                                                                                }
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                        })

                                                                                                                                                                                                                                            if(message.contato.length > 0){
                                                                                                                                                                                                                                                    return message
                                                                                                                                                                                                                                                        }else{
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
>>>>>>> ea910bf35a9a3c20701a75cbff1772e674f7818d

