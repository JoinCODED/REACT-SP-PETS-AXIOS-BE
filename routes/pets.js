const express = require('express');

const {
  getPets,
  updatePet,
  deletePet,
  createPet,
} = require('../controllers/petsController');

const router = express.Router();

router.get('/', getPets);
router.post('/', createPet);
router.put('/:petId', updatePet);
router.delete('/:petId', deletePet);

module.exports = router;
