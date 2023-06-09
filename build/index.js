"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)({
    origin: ["https://temsabor.blog", "http://localhost:3000", "http://127.0.0.0:3000/"]
}));
server.use(express_1.default.json());
server.use(router_1.default);
server.listen(8082, () => console.log("SERVER IS RUNNING ON PORT 8082"));
