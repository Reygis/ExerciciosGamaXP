//Eu puxo a informação que eu quero, do index, desestruturando o que eu quero do arquivo, as informaççoes de curso e categoria, que atualiza sozinho
const { Curso, Categoria, Site } = require("../models");


//Faço um get, de todos os itens na lista, com um await e async
const cursoController = {
    listarCursos: async(req, res) => {
        const listaCursos = await Curso.findAll({
            include: Categoria,
            include: Site //FAzendo isso eu trago o nome da categoria junto na hora de dar um GET
        });

        res.status(200).json(listaCursos);
    },


    listarCursoPorId: async(req, res) => {
        const { id } = req.params;

        const listaCursoID = await Curso.findByPk(id);

        res.status(200).json(listaCursoID);
    },


    async cadastrarCurso(req, res) {
        const { titulo, professor, descricao, categoria_id, site_id } = req.body;

        novoCurso = await Curso.create({
            titulo,
            professor,
            descricao,
            categoria_id
        });
        const site = await Site.findByPk(site_id);

        await novoCurso.setSites(site);

        res.status(201).json(novoCurso);
    },


    atualizarCurso: async(req, res) => {
        const { id } = req.params;
        const { titulo, professor, descricao } = req.body;

        if (!id) return res.status(400).json("Id Não Existe");

        const cursoAtualizado = await Curso.update({
            titulo,
            professor,
            descricao
        }, {
            where: {
                id,
            }
        });
        const cursoAposUpdate = await Curso.findByPk(id)

        res.json(cursoAposUpdate);

    },


    deletarCurso: async(req, res) => {
        try {
            const { id } = req.params;

            await Curso.destroy({
                where: {
                    id: id,
                }
            })


            res.status(204);

        } catch (error) {
            res.status(400).json(`${error} - tente denovo com um parâmetro válido`);
        };
    }

};



module.exports = cursoController;