# Car API with Node.js

A simple REST API for managing a collection of cars using Node.js, Express, and in-memory storage.

## Overview

This project is a simple REST API to manage a collection of cars. It supports basic CRUD operations: Create, Read, Update, and Delete. The API is built using Node.js and Express, with data stored in memory.

## Features

- **Create** a new car
- **Retrieve** all cars
- **Retrieve** a car by ID
- **Update** a car by ID
- **Delete** a car by ID

## Technologies Used

- Node.js
- Express
- Jest (for testing)
- Supertest (for API testing)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ahsaanshuja/car-api-nodejs.git
   cd car-api-nodejs
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### Running the Server

To run the server locally, use the following command:

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

### Running Tests

To run the tests using Jest, use the following command:

```bash
npm run test
```

This will execute the test cases defined in the `tests/car.test.js` file.

## API Endpoints

Here are the available API endpoints:

### 1. GET /cars

- **Description**: Retrieve all cars.
- **Request**: `GET /cars`
- **Response**:
  - `200 OK`: Returns an array of cars.

### 2. GET /cars/:id

- **Description**: Retrieve a car by its ID.
- **Request**: `GET /cars/:id`
- **Response**:
  - `200 OK`: Returns the car object.
  - `404 Not Found`: Car not found.

### 3. POST /cars

- **Description**: Create a new car.
- **Request**: `POST /cars`
- **Body**:
  ```json
  {
    "make": "Toyota",
    "model": "Camry",
    "year": 2022,
    "color": "Blue"
  }
  ```
- **Response**:
  - `201 Created`: Returns the created car object.

### 4. PUT /cars/:id

- **Description**: Update an existing car by ID.
- **Request**: `PUT /cars/:id`
- **Body**:
  ```json
  {
    "color": "Red"
  }
  ```
- **Response**:
  - `200 OK`: Returns the updated car object.
  - `404 Not Found`: Car not found.

### 5. DELETE /cars/:id

- **Description**: Delete a car by ID.
- **Request**: `DELETE /cars/:id`
- **Response**:
  - `204 No Content`: Car successfully deleted.
  - `404 Not Found`: Car not found.
