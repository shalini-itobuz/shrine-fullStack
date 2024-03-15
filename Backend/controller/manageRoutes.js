import { Router } from "express"
import { homeRoutes } from "../routes/home/home.js";
import { aboutRoutes } from "../routes/about/about.js";
import { faqRoutes } from "../routes/faq/faq.js";
import { galleryRoutes } from "../routes/gallery/gallery.js";
import { pastorRoutes } from "../routes/pastor/pastor.js";
export const manageRoutes=()=>{
    const router=Router();

    homeRoutes(router);
    aboutRoutes(router);
    faqRoutes(router);
    galleryRoutes(router);
    pastorRoutes(router);
    return router;
}