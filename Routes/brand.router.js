import express from 'express'
import BrandController from '../Controllers/brand.controller.js';
const controller = new BrandController();
const router = express.Router();

// Get list of all records
router.get('/brands', async (req, res) => {
	const result = await controller.listall()
	res.json(result);
});

// Get a single record by id (getone)
router.get('/brands/:id([0-9]*)', async (req, res) => {
	const result = await controller.getone(req.params.id)
    res.json(result);
});

// Create a new record
router.post('/brands', async (req, res) => {
	try {
		const result = await controller.create(req.body);
		res.send({
			message: 'Record created successfully',
			newId: result.id
		});			
	} catch (error) {
		res.send(error.message)
	}
});

// Update record
router.put('/brands', async (req, res) => {
	try {
		await controller.update(req.body);
		res.send({
			message: 'Record updated successfully'
		});			
	} catch (error) {
		res.send(error.message)
	}
});

// Delete a record by id
router.delete('/brands/:id([0-9]*)', async (req, res) => {
	try {
		await controller.delete(req.params.id);
		res.send({
            message: 'Record deleted successfully'
        });
	} catch (error) {
		res.send(error.message)
	}
});

export { router as BrandRouter };