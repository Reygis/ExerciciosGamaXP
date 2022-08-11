import { DatabaseSingleton } from "./DatabaseDingleton";

let db: DatabaseSingleton;

db = DatabaseSingleton.getInstance();
db.executarQuery("SELECT * FROM tblCliente");

let db2: DatabaseSingleton;
db2 = DatabaseSingleton.getInstance();
db2.executarQuery("SELECT * FROM tblProduto");