import express from 'express'
const router = express.Router();

// Get list of all categories
router.get('/categories', (req, res) => {
    res.send('Hent liste af kategorier');
});

// Get a single category by id (details)
router.get('/categories/:id([0-9]*)', (req, res) => {
	console.log(req.params.id);
    res.send('Hent kategori detaljer');
});

// Create a new category
router.post('/categories', (req, res) => {
	console.log(req.body);
    res.send('Opret kategori');
});

// Update a category by id
router.put('/categories', (req, res) => {
	console.log(req.body);
    res.send('Opdaterer kategori');
});

// Delete a category by id
router.delete('/categories/:id([0-9]*)', (req, res) => {
	console.log(req.params.id);
	res.send('Sletter kategori');
});

export { router }