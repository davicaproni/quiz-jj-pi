const mysql = require('mysql2');
//const express = require('express');

const HABILITAR_OPERACAO_INSERIR = true;

var pontos = 0;


    // conexão com o banco de dados MySQL
    let poolBancoDados = mysql.createPool(
        {
            host: '127.0.0.1',
            user: 'ceo',
            password: 'Sptech#2024',
            database: 'quiz',
            port: 3306
        }
    ).promise();

    function calcular() {
        if (um.value = '11' ) {
        
    }
}

    function novo() {

    
        if (HABILITAR_OPERACAO_INSERIR) {
          
            poolBancoDados.query(
                'INSERT INTO pontuação (pontos) VALUES (?)',
                [pontos]
            )
        } else {
            console.log('Operação de inserção está desabilitada.');
        }
    }
    