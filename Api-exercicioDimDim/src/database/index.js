const Sequelize = require("sequelize");

const DB_NAME = "din_din";
const DB_USER = "root";
const DB_PASS = "root";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
};

// objeto para guardar a conexão do banco de dados
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error) { "Erro de conexão com o DB." };


//Function para testar a conexão com o db
async function hasConection() {
    try {
        await db.authenticate();
        console.log("Banco de dados Conectado!");
    } catch (error) {
        console.error("Erro na conexão", error)
    }
}

//Chama a function no db
Object.assign(db, {
    hasConection,
});

module.exports = db;