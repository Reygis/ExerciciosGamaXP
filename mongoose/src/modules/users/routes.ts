import { Router } from "express";
import { UserController } from "./controller";

const routes = Router();

routes.post('/user', UserController.create);
routes.get('/user', UserController.findAll);
routes.get('/user/:id', UserController.findOne);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

export default routes;