import { images } from "../../data/FaqData.js";
export function faqRoutes(router){
    router.get("/api/about/faq",(req,res)=>{
        res.status(200).json({message:images});
    })
    
}