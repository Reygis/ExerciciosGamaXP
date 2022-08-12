const { DataTypes } = require("sequelize");
const db = require("../database");

const Categoria = db.define(
    "Categoria", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    }, {
        tableName: "categorias",
    });

module.exports = Categoria;