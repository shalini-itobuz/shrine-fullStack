import { imageUrls,imageLabels } from "../../Data/VideoListing.js";
export function videoListingRoutes(router){
    router.get("/api/pages/videos",(req,res)=>{
        res.status(200).json({message:imageUrls,imageLabels});
    })
    

    
}