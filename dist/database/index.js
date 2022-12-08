"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = void 0;
const Connection_1 = __importDefault(require("./Connection"));
const MongoDB = new Connection_1.default("mongodb://localhost:27017/banco");
exports.MongoDB = MongoDB;
