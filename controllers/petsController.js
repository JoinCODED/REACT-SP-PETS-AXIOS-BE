let data = require('../data');
// const slugify = require('slugify');

exports.getPets = async (req, res, next) => {
  try {
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.createPet = async (req, res, next) => {
  try {
    let pet = req.body;
    pet.id = data[data.length - 1].id + 1;
    data.push(pet);
    res.status(201).json(pet);
  } catch (error) {
    next(error);
  }
};

exports.deletePet = async (req, res, next) => {
  try {
    const pet = data.find((pet) => pet.id === +req.params.petId);
    if (!pet) {
      res.status(404).json({ message: 'Pet not found' }).end();
    } else {
      data = data.filter((pet) => pet.id !== +req.params.petId);
      res.status(204).end();
    }
  } catch (error) {
    next(error);
  }
};
exports.updatePet = async (req, res, next) => {
  try {
    const pet = data.find((pet) => pet.id === +req.params.petId);
    if (!pet) {
      res.status(404).json({ message: 'Pet not found' }).end();
    } else {
      const newPet = req.body;
      newPet.id = +req.params.petId;
      data = data.map((pet) => (pet.id === +req.params.petId ? newPet : pet));
      res.status(201).json(req.body);
    }
  } catch (error) {
    next(error);
  }
};
