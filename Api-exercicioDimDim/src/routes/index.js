const express = require("express");
const cursoController = require("../controller/cursoController");
const usuarioController = require("../controller/usuarioController");
const authController = require("../controller/authController");
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const auth = require("../middlewares/auth");
const { Router } = require("express");
const usuarioCreateValidation = require("../validations/usuarios/create");
const authLoginValidation = require("../validations/auth/login");
const routes = express.Router();


//Métodos HTTP
routes.get("/cursos", requestLog, bloqueio, cursoController.listarCursos);
routes.get("/cursos/:id", cursoController.listarCursoPorId);
routes.post("/cursos/", auth, cursoController.cadastrarCurso);
routes.put("/cursos/:id", cursoController.atualizarCurso);
routes.delete("/cursos/:id", cursoController.deletarCurso);


routes.get("/usuarios", usuarioController.listarUsuarios);
routes.get("/usuarios/:id", usuarioController.listarUsuariosId);
routes.post("/login", authLoginValidation, authController.login);
routes.post("/usuarios", usuarioCreateValidation, usuarioController.cadastro);
routes.delete("/usuarios/:id", usuarioController.deletarUsuario);




module.exports = routes;