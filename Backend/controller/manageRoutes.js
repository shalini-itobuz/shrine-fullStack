import { Router } from "express"
import { homeRoutes } from "../routes/home/home.js";
import { aboutRoutes } from "../routes/about/about.js";

export const manageRoutes=()=>{
    const router=Router();

    homeRoutes(router);
    aboutRoutes(router);
    return router;
}