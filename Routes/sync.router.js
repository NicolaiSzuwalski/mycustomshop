import express from 'express'
import sequelize from '../Config/db.sequelize.js';
import Category from '../Models/category.model.js';
import Product from '../Models/product.model.js';
import CategoryProductRel from '../Models/category_product_rel.model.js';
const router = express.Router();

// Syncronize sequelize models
router.get('/sync', (req, res) => {
    sequelize.sync({ force: true})
    res.json({
        message: 'Syncronized models'
    });
});

export { router }