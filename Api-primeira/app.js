const express = require("express");
const routes = require("./src/routes/index.js");
const handleError = require('./src/middlewares/handleError');
// const requestLog = require('./src/middlewares/requestLog');

const db = require('./src/database');

const app = express();

db.hasConection();

app.use(express.json());
// app.use(requestLog);
app.use(routes);
app.use(handleError);

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"));

// criação de tabela
(async()=>{await db.sync();})();