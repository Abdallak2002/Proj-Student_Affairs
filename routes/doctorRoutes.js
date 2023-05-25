const express = require('express');
const doctorController = require('../controllers/doctorController.js');

const router = express.Router();

// Middleware
router.use(express.json());

// Get all doctors
router.get('/', doctorController.getdoctor);

// Get doctor by ID
router.get('/:id', doctorController.getdoctor);

// Create a new doctor
router.post('/', doctorController.createdoctor);

// Update doctor by ID
router.put('/:id', doctorController.updatedoctor);

// Delete doctor by ID
router.delete('/:id', doctorController.deletedoctor);

module.exports = router;
