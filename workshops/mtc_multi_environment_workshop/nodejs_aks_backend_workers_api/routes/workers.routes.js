const express = require('express');
const { getWorkers , createNewWorker, getWorkerById, updateWorkerById, deleteWorkerById} = require('../controllers/workers.controller');
const router = express.Router();


router.get('/workers', getWorkers);
router.post('/workers', createNewWorker);
router.get('/workers/:id', getWorkerById);
router.put('/workers/:id', updateWorkerById);
router.delete('/workers/:id', deleteWorkerById);

module.exports = router;