const express = require("express");
const routes = require("./routes/index.js")

const db = require("./database")

const app = express();

db.hasConection();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server ON, porta 3000"));

//função pra criar tabelas
(async()=>{
    await db.sync();
})();