import {
  carDelete,
  create,
  getAll,
  getById,
  update,
} from "../models/carModel.js";

// Get all cars
const getAllCars = (req, res, next) => {
  try {
    const cars = getAll();
    res.json(cars);
  } catch (error) {
    next(error);
  }
};

// Get car by ID
const getCarById = (req, res, next) => {
  try {
    const car = getById(req.params.id);
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Create a new car
const createCar = (req, res, next) => {
  try {
    const { make, model, year, color } = req.body;
    if (!make || !model || !year || !color) {
      res.status(400);
      throw new Error("All fields are required");
    }
    const newCar = create({ make, model, year, color });
    res.status(201).json(newCar);
  } catch (error) {
    next(error);
  }
};

// Update a car by ID
const updateCar = (req, res, next) => {
  try {
    const { id } = req.params;
    const { make, model, year, color } = req.body;
    const updatedCar = update(id, { make, model, year, color });
    if (updatedCar) {
      res.json(updatedCar);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Delete a car by ID
const deleteCarHandler = (req, res, next) => {
  try {
    const { id } = req.params;
    const isDeleted = carDelete(id);
    if (isDeleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    next(error);
  }
};

export {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCarHandler as deleteCar,
};
