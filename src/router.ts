import { Router } from "express";
const route = Router();

import groups from "./routes/groups/index"
route.use(groups)


export default route;