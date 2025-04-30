const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'ceo',
    password: 'Sptech#2024',
    database: 'quiz',
    port: 3306
});

connection.connect(function(erro) {
    if (erro) throw erro;
    console.log('Conexão realizada com sucesso');
}); 