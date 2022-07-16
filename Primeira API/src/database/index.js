const Sequelize = require("sequelize");

const DB_NAME = "loja";
const DB_USER = "root";
const DB_PASS = "root";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
};

// objeto que guarda conexão com o banco
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Erro ao conectar com db", error);
}

//função pra testar conexão com db
async function hasConection(){
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};
Object.assign(db,{
    hasConection,
});

module.exports = db;