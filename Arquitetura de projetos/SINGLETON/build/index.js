"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseDingleton_1 = require("./DatabaseDingleton");
let db;
db = DatabaseDingleton_1.DatabaseSingleton.getInstance();
db.executarQuery("SELECT * FROM tblCliente");
let db2;
db2 = DatabaseDingleton_1.DatabaseSingleton.getInstance();
db2.executarQuery("SELECT * FROM tblProduto");
