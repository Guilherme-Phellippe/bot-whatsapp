"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const server = (0, express_1.default)();
server.use(router_1.default);
server.listen(8081, () => console.log("SERVER IS RUNNING ON PORT 8081"));
