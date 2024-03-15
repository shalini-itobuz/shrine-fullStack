import { Router } from "express"
import { homeRoutes } from "../routes/home/home.js";
import { aboutRoutes } from "../routes/about/about.js";
import { faqRoutes } from "../routes/faq/faq.js";
export const manageRoutes=()=>{
    const router=Router();

    homeRoutes(router);
    aboutRoutes(router);
    faqRoutes(router)
    return router;
}