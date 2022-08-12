const express = require("express");
const routes = require("./routes");
const db = require("./database");
const sequelize = require("./database");
const handleError = require("./middlewares/handleError");

const app = express();

sequelize.sync();
db.hasConection();

app.use(express.json());
app.use(routes);
app.use(handleError);



app.listen(3000, () => { console.log("Api server is running.") });


(async()=>{await db.sync();})();