import 'dotenv/config'
import express from 'express'
import mapRouter from './routes/map.js'
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/api/map', mapRouter)

app.listen(PORT, () => {
    console.log(`Server Running : http://localhost:${PORT}`);
});