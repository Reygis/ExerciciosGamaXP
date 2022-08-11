const Fabricantes = require("./Fabricantes");
const Produtos = require("./Produtos");
const Usuarios = require('./Usuarios')

Produtos.belongsTo(Fabricantes,{
    foreignKey: "fabricantes_id",
});
Fabricantes.hasMany(Produtos,{
    foreignKey: "fabricantes_id",
});

module.exports = {
    Fabricantes,
    Produtos,
    Usuarios
};
