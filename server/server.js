import 'dotenv/config'
import express from 'express'
import mapRouter from './routes/map.js'
import cors from "cors"
import db from './db/db.js';

const app = express();
const PORT = 3300;

app.use(cors());
app.use('/api/map', mapRouter)


async function testDB() {
  try {
    const [rows] = await db.query('SELECT 1');

    console.log('DB 연결 성공!');
    console.log(rows);
  } catch (error) {
    console.error('DB 연결 실패:', error);
  }
}

testDB();


app.listen(PORT, () => {
    console.log(`Server Running : http://localhost:${PORT}`);
});