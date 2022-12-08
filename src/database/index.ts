import Connection from "./Connection";

const MongoDB = new Connection("mongodb://localhost:27017/banco");

export {MongoDB};