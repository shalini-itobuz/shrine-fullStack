import { tabData } from "../../Data/GalleryData.js";
export function galleryRoutes(router){
    router.get("/api/about/tab",(req,res)=>{
        res.status(200).json({message:tabData});
    })
    
}