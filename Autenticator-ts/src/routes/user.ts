import {Router} from "express"
import { UserController } from "../controller/UserController"
import {checkJwt} from "../middleware/checkJwt"
import {checkRole} from "../middleware/checkRole"

const router = Router()

//get all users
router.get("/", [checkJwt, checkRole["ADMIN"]], UserController.listAll)

//get One user
router.get(
    "/:id([0-9]+)",[checkJwt, checkRole["ADMIN"]],
    UserController.getOneById
)

//create a new user
router.post("/", [checkJwt, checkRole["ADMIN"]], UserController.newUer)

//edit one user
router.put(
    "/:id([0-9]+)",
    [checkJwt, checkRole["ADMIN"]],
    UserController.editUser
)

//delete a user
router.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole["ADMIN"]],
    UserController.deleteUser
)

export default router