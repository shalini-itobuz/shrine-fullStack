import { quotes ,quote} from "../../data/BlogData.js";
export function blogRoutes(router){
    router.get("/api/blog/quoteOfTheDay",(req,res)=>{
        res.status(200).json({message:quotes});
    })
    router.get("/api/blog/quote",(req,res)=>{
        res.status(200).json({message:quote});
    })
    
}



