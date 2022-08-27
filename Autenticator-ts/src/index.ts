import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import helmet from "helmet"
import * as cors from "cors"
import routes from "./routes"
import {AppDataSource} from "./data-source"

AppDataSource.initialize()
    .then(()=>{
        const app = express()

        //middlewares later
        app.use(cors())
        app.use(helmet())
        app.use(bodyParser.json())

        // set all routes rom routes folder
        app.use("/", routes)

        app.listen(3030, ()=>{
            console.log("Server started on port 3030")
        })
    })
    .catch((error)=> console.log(error))