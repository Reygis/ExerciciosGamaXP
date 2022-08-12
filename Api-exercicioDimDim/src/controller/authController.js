const { Professor } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const AuthController = {
    async login(req, res) {
        const { email, senha } = req.body;

        const usuario = await Professor.findOne({
            where: {
                email,
            }
        })
        if (!usuario) {
            return res.status(400).json("E-mail e senha incorretos!");
        }

        if (!bcrypt.compareSync(senha, usuario.senha)) {

            return res.status(400).json("E-mail e senha incorretos!");

        }

        const token = jwt.sign({
                id: usuario.id,
                email: usuario.email,
                nome: usuario.nome,
            },
            secret.key
        );


        return res.json(token);
    }
};

module.exports = AuthController;