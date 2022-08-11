"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSingleton = void 0;
class DatabaseSingleton {
    constructor() {
        console.log('CONSTRUTOR - aqui eu crio a coneao com o banco ...');
    }
    static getInstance() {
        if (!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }
    executarQuery(query) {
        console.log('DB>' + query);
    }
}
exports.DatabaseSingleton = DatabaseSingleton;
