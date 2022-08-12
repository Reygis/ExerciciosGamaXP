const { Professor } = require("../models");
const bcrypt = require("bcryptjs");
const { listarCursoPorId } = require("./cursoController");


const UsuariosController = {
    async listarUsuarios(req, res) {
        const listarUsuarios = await Professor.findAll({});

        res.status(200).json(listarUsuarios);
    },

    async listarUsuariosId(req, res) {
        const { id } = req.params;

        const usuarioId = await Professor.findByPk(id);

        res.status(200).json(usuarioId);
    }

    ,

    async cadastro(req, res) {
        const { nome, email, senha } = req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        const novoUsuario = await Professor.create({ nome, email, senha: newSenha });

        res.json(novoUsuario)
    },
    async deletarUsuario(req, res) {
        try {
            const { id } = req.params;

            await Professor.destroy({
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

module.exports = UsuariosController;