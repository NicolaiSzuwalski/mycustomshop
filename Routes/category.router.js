import express from 'express'
import { CategoryController } from '../controller/category.controller.js';
const router = express.Router();
const controller = new CategoryController();


// Get list of all categories
router.get('/categories', async (req, res) => {
	const result = await controller.listall();
	res.json(result);
});

// Get a single category by id (details)
router.get('/categories/:id([0-9]*)', async (req, res) => {
    const result = await controller.getone(req.params.id);
	res.json(result);
});

// Create a new category
router.post('/categories', async (req, res) => {
	try {
		const result = await controller.create(req.body);
    	res.send({message : 'Category created successfully',
		newId : result.id
	});
	} catch (error) {
		res.send(error.message);
	}
});

// Update a category by id
router.put('/categories', async (req, res) => {
	try {
		const result = await controller.update(req.body);
    	res.send({message : 'Category updated successfully',
	});
	} catch (error) {
		res.send(error.message);
	}
});

// Delete a category by id
router.delete('/categories/:id([0-9]*)', async (req, res) => {
	try {
		await controller.delete(req.params.id);
		res.send(
			{message : 'Category deleted successfully'}
			);
	} catch (error) {
		res.send(error.message);
	}
});

export { router }