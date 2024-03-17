import { imageUrls } from "../../Data/EventsData.js";
export function eventsRoutes(router){
    router.get("/api/pages/events",(req,res)=>{
        res.status(200).json({message:imageUrls});
    })
  
    
}