import { phoneNumberData } from "../../Data/EventDetailsData.js";
export function eventDetailsRoutes(router){
    router.get("/api/contact",(req,res)=>{
        res.status(200).json({message:phoneNumberData});
    })
  
    
}