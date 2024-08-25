import { Router } from "express";
const router = Router();
import {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";

// GET /cars: Retrieve all cars
router.get("/", getAllCars);

// GET /cars/:id: Retrieve a car by ID
router.get("/:id", getCarById);

// POST /cars: Add a new car
router.post("/", createCar);

// PUT /cars/:id: Update a car by ID
router.put("/:id", updateCar);

// DELETE /cars/:id: Delete a car by ID
router.delete("/:id", deleteCar);

export default router;
