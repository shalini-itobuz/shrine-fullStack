import { members, imagesWithInfo,carouselData } from "./Data/Homedata.js";
import express from "express";
import cors from "cors";
import { manageRoutes } from "./controller/manageRoutes.js";
import { statisticsData } from "./Data/aboutData.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(manageRoutes());



// app.get("/api/home/meditation",(req,res)=>{
//   res.status(200).json(carouselData);
// })

// app.get('/api/about/happyCount', async (req, res) => {
//   try{
//       res.json({ happyCount });
//   } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});