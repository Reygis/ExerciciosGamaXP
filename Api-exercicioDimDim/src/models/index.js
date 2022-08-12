const Categoria = require("./Categorias");
const Curso = require("./Cursos");
const Site = require("./Sites");
const SiteCurso = require("./SiteCursos");
const Professor = require("./Professores");

//Essa chave diz que o curso pertence a uma categoria, ou seja curso N - 1 categoria
Curso.belongsTo(Categoria, {
    foreignKey: "categoria_id",
})

//Essa chave diz que uma categoria tem varios cursos ou seja categoria 1 - n cursos 
Categoria.hasMany(Curso, {
    foreignKey: "curso_id",
})

// Adicionando N para M
Site.belongsToMany(Curso, {
    foreignKey: "site_id",
    through: SiteCurso,
})

Curso.belongsToMany(Site, {
    foreignKey: "curso_id",
    through: SiteCurso,
})

//Dessa forma eu exporto para o arquivo controller
module.exports = {
    Categoria,
    Curso,
    Site,
    Professor,
}