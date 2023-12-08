import express from 'express';
import { router as CategoryRouter } from './Routes/category.router.js';
import { router as SyncRouter } from './Routes/sync.router.js';

const port = process.env.PORT || 4000
const app = express();
app.use(express.urlencoded({ extended: true }))

app.use(CategoryRouter,SyncRouter)

app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));
