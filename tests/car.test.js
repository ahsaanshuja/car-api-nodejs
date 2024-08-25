import request from "supertest";
import app from "../app.js"; // Import the app for testing

describe("Car API", () => {
  let carId;

  // Test the POST /cars endpoint
  it("should create a new car", async () => {
    const response = await request(app).post("/cars").send({
      make: "Toyota",
      model: "Camry",
      year: 2022,
      color: "Blue",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.make).toBe("Toyota");
    expect(response.body.model).toBe("Camry");
    expect(response.body.year).toBe(2022);
    expect(response.body.color).toBe("Blue");

    carId = response.body.id; // Save the car ID for later tests
  });

  // Test the GET /cars endpoint
  it("should retrieve all cars", async () => {
    const response = await request(app).get("/cars");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Test the GET /cars/:id endpoint
  it("should retrieve a car by ID", async () => {
    const response = await request(app).get(`/cars/${carId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", carId);
    expect(response.body.make).toBe("Toyota");
    expect(response.body.model).toBe("Camry");
    expect(response.body.year).toBe(2022);
    expect(response.body.color).toBe("Blue");
  });

  // Test the PUT /cars/:id endpoint
  it("should update a car by ID", async () => {
    const response = await request(app).put(`/cars/${carId}`).send({
      color: "Red",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", carId);
    expect(response.body.color).toBe("Red");
  });

  // Test the DELETE /cars/:id endpoint
  it("should delete a car by ID", async () => {
    const response = await request(app).delete(`/cars/${carId}`);
    expect(response.statusCode).toBe(204);
  });

  // Test that the car has been deleted
  it("should return 404 when retrieving a deleted car", async () => {
    const response = await request(app).get(`/cars/${carId}`);
    expect(response.statusCode).toBe(404);
  });
});
