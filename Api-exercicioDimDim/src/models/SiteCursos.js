const { DataTypes } = require("sequelize");
const db = require("../database/index");
const Curso = require("./Cursos");
const Site = require("./Sites");

const SiteCursos = db.define("SiteCursos", {
    site_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Site,
            key: "id"
        }
    },
    curso_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Curso,
            key: "id"
        }
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
}, {
    tableName: "SiteCursos",
});

module.exports = SiteCursos;