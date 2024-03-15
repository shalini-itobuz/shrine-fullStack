import { images ,accordionFAQs} from "../../data/FaqData.js";
export function faqRoutes(router){
    router.get("/api/about/faq",(req,res)=>{
        res.status(200).json({message:images});
    })
    router.get("/api/about/faqQuestions",(req,res)=>{
        res.status(200).json({message:accordionFAQs});
    })
    
}