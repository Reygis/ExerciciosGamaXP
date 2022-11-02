import { Router } from "express";
import { Controller } from "./controller";

const routes = Router();

routes.post('/post', Controller.create);
routes.get('/post', Controller.findAll);


export default routes;