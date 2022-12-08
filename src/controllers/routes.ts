import { Router } from "express";
import Controller from "./User"

const routes = Router();

routes.post("/user",Controller.create);
routes.get("/user",Controller.findAll);
routes.get("/user/:id",Controller.findOne);
routes.put("/user/:id",Controller.uptade);
routes.delete("/user/:id",Controller.delete);

export default routes;