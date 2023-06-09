import express from "express";
import route from "./router";
import cors from "cors";


const server = express();

server.use(cors({
    origin: ["https://temsabor.blog", "http://localhost:3000", "http://127.0.0.0:3000/"]
}));
server.use(express.json())
server.use(route)


server.listen(8081, ()=> console.log("SERVER IS RUNNING ON PORT 8081"))







