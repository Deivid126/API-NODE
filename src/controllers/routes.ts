import { Router } from "express";
import Controller from "./User"
import ControllerPost from "./Posts"

const routes = Router();

routes.post("/user",Controller.create);
routes.get("/user",Controller.findAll);
routes.get("/user/:id",Controller.findOne);
routes.put("/user/:id",Controller.uptade);
routes.delete("/user/:id",Controller.delete);
routes.post("/post",ControllerPost.create);
routes.get("/post",ControllerPost.findAll);


export default routes;