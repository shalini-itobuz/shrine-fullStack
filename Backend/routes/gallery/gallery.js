import { tabData } from "../../data/GalleryData.js";
export function galleryRoutes(router){
    router.get("/api/about/tab",(req,res)=>{
        res.status(200).json({message:tabData});
    })
    
}