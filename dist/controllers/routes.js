"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("./User"));
const routes = (0, express_1.Router)();
routes.post("/user", User_1.default.create);
routes.get("/user", User_1.default.findAll);
routes.get("/user/:id", User_1.default.findOne);
routes.put("/user/:id", User_1.default.uptade);
routes.delete("/user/:id", User_1.default.delete);
exports.default = routes;
