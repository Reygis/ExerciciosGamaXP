const { DataTypes } = require("sequelize");
const db = require("../database");
const Categorias = require("./Categorias");

const Curso = db.define(
    "Cursos", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
        },
        professor: {
            type: DataTypes.FLOAT,
        },
        descricao: {
            type: DataTypes.INTEGER,
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Categorias,
                key: "id",
            }
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    }, {
        tableName: "cursos",
    });

module.exports = Curso;