import express from 'express'
import { GendersController } from '../controller/genders.controller.js';
const router = express.Router();
const controller = new GendersController();


// Get list of all categories
router.get('/genders', async (req, res) => {
	const result = await controller.listall();
	res.json(result);
});

// Get a single category by id (details)
router.get('/genders/:id([0-9]*)', async (req, res) => {
    const result = await controller.getone(req.params.id);
	res.json(result);
});

// Create a new category
router.post('/genders', async (req, res) => {
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
router.put('/genders', async (req, res) => {
	try {
		const result = await controller.update(req.body);
    	res.send({message : 'Category updated successfully',
	});
	} catch (error) {
		res.send(error.message);
	}
});

// Delete a category by id
router.delete('/genders/:id([0-9]*)', async (req, res) => {
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