interface DBConnectionInterface {
    connect():void; 
}

class MySQLConnection implements DBConnectionInterface {
    connect():void {
        console.log("conectado no mysql")
    }
}
class MongoDBConnection implements DBConnectionInterface {
    connect():void {
        console.log("conectado no mongo")
    }
}

class PasswordReminder{
    private dbConnection: DBConnectionInterface

    constructor(dbConnection: DBConnectionInterface) {
        this.dbConnection = dbConnection
    }

    public connect() {
        this.dbConnection.connect()
    }
}

const mysql: MySQLConnection = new MySQLConnection
const passwordReminder: PasswordReminder = new PasswordReminder(mysql)
passwordReminder.connect()

const mongo: MongoDBConnection = new MongoDBConnection
const passwordReminder2: PasswordReminder = new PasswordReminder(mongo)
passwordReminder2.connect()