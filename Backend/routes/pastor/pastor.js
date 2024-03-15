import { images ,members} from "../../data/PastorData.js";

export function pastorRoutes(router){
    router.get("/api/pages/pastorgallery",(req,res)=>{
        res.status(200).json({message:images});
    })
    router.get("/api/pages/pastormembers",(req,res)=>{
        res.status(200).json({message:members});
    })

    
}