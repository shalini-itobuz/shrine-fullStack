import { Router } from "express"
import { homeRoutes } from "../routes/home/home.js";
import { aboutRoutes } from "../routes/about/about.js";
import { faqRoutes } from "../routes/faq/faq.js";
import { galleryRoutes } from "../routes/gallery/gallery.js";
import { pastorRoutes } from "../routes/pastor/pastor.js";
import { videoListingRoutes } from "../routes/videoListing/videolisting.js";
import { eventsRoutes } from "../routes/events/events.js";
import { blogRoutes } from "../routes/blog/blog.js";
import { eventDetailsRoutes } from "../routes/eventDetails/eventDetails.js";
export const manageRoutes=()=>{
    const router=Router();

    homeRoutes(router);
    aboutRoutes(router);
    faqRoutes(router);
    galleryRoutes(router);
    pastorRoutes(router);
    videoListingRoutes(router);
    eventsRoutes(router);
    blogRoutes(router);
    eventDetailsRoutes(router);
    return router;
}