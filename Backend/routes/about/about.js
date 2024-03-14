import { statisticsData, happyCount } from "../../Data/aboutData.js";
export function aboutRoutes(router) {
    router.get('/api/about/statistics', (req, res) => {
        res.status(200).json({ message: statisticsData });
    });
    router.get('/api/about/happyCount', (req, res) => {
        res.status(200).json({ message: happyCount });
    })
}

