const db = require("../database");
const { DataTypes } = require("sequelize");

// estrutura que vai ser mandada para o banco de dados, deve ter todas as tabelas do banco
const Produtos = db.define(
    "Produtos", // nome do modulo
    { // descrição das colunas do banco
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome:{
            type:DataTypes.STRING,
        },
        //e por ai vai      
    },
    {
        tableName:"produtos",
    }
);

module.exports = Produtos;