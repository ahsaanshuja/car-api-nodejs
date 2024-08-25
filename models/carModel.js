let cars = [];

// Helper function to find car by ID
const findCarById = (id) => cars.find((car) => car.id === id);

// Generate unique ID for cars
const generateId = () => Math.random().toString(36).substring(2, 9);

// Define each CRUD function
const getAll = () => cars;

const getById = (id) => findCarById(id);

const create = ({ make, model, year, color }) => {
  if (!make || !model || !year || !color) {
    throw new Error("All car fields (make, model, year, color) are required");
  }
  const newCar = { id: generateId(), make, model, year, color };
  cars.push(newCar);
  return newCar;
};

const update = (id, { make, model, year, color }) => {
  const car = findCarById(id);
  if (car) {
    car.make = make || car.make;
    car.model = model || car.model;
    car.year = year || car.year;
    car.color = color || car.color;
    return car;
  } else {
    throw new Error("Car not found");
  }
};

const carDelete = (id) => {
  const carIndex = cars.findIndex((car) => car.id === id);
  if (carIndex !== -1) {
    cars.splice(carIndex, 1);
    return true;
  } else {
    throw new Error("Car not found");
  }
};

export { getAll, getById, create, update, carDelete };
