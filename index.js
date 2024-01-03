import express from 'express';
import { router as CategoryRouter } from './Routes/category.router.js';
import { router as SyncRouter } from './Routes/sync.router.js';
import { router as BrandRouter } from './Routes/brand.router.js';

const port = process.env.PORT || 4000 // Deklarer port til server
const app = express(); // Deklarer app med express
app.use(express.urlencoded({ extended: true })) // Parse urlencoded form bodies

// Sætter routes
app.use(CategoryRouter,SyncRouter);

// Sætter en server listener på porten
app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));
