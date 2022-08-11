const Sequelize = require("sequelize");

const DB_NAME = 'loja';
const DB_USER = 'root';
const DB_PASS = 'root';
const DB_CONFIG = {
    dialect:'mysql',
    host: 'localhost',
    port: 3306
};

//objeto para guardar a conexão com o banco de dados
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch(error){
    console.log('Erro ao COnectar com o Banco de Dados');
}

async function hasConection(){
    try {
        await db.authenticate();
        console.log('Banco de Dados Conectado!');

    } catch (error){
        console.log('Erro ao tentar se conectar ao Banco de Dados1');
    }
}

Object.assign(db, {
    hasConection,
});
module.exports = db;


    

