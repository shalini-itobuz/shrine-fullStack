import { members, imagesWithInfo,carouselData } from "../../Data/Homedata.js";

export function homeRoutes(router){
    router.get("/api/home/churchpeople",(req,res)=>{
        res.status(200).json({message:members});
    })

    router.get("/api/home/church",(req,res)=>{
        res.status(200).json({message:imagesWithInfo});
    })
    router.get("/api/home/meditation",(req,res)=>{
        res.status(200).json({message:carouselData});
    })

    
}

// obj = {
//     basePath: '/home',
//     'home': {
//         'churchpeople': () => basePath + '/churchpeople'
//     }
// }