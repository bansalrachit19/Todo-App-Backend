# Todo App Backend

This repository contains the backend implementation for a Todo App. It is built using Node.js and Express, with MongoDB as the database.

## Features

- Create, Read, Update, and Delete (CRUD) operations for Todo items.
- Modular structure with separate controllers, routes, and models.
- Environment variable support using `.env` files.

## Prerequisites

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bansalrachit19/Todo-App-Backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Todo-App-Backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost/(name of your database)
   ```

5. Start the MongoDB server (if not already running):
   ```bash
   mongod
   ```

6. Start the server:
   ```bash
   npm run dev
   ```

   The server will start on the specified port (default: `5000`).

## Project Structure

```
Todo-App-Backend/
├── config/
│   └── database.js       # Database connection setup
├── controllers/
│   ├── createTodo.js     # Controller for creating a todo
│   ├── deleteTodo.js     # Controller for deleting a todo
│   ├── getTodos.js       # Controller for fetching todos
│   ├── updateTodo.js     # Controller for updating a todo
├── models/
│   └── todo.js           # Mongoose schema for todos
├── routes/
│   └── todos.js          # API routes for todos
├── .env                  # Environment variables (gitignored)
├── .gitignore            # Git ignored files and directories
├── index.js              # Entry point of the application
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency tree lockfile
└── README.md             # Project documentation
```

## API Endpoints

Base URL: `http://localhost:5000/api/v1`

### 1. Create a Todo
**POST** `/createTodo`

**Request Body:**
```json
{
  "title": "Sample Todo",
  "description": "This is a sample todo description."
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "entry created successfully"
}
```

---

### 2. Get All Todos
**GET** `/getTodos`

**Response:**
```json
{
  "success": true,
  "data": [ ... ],
  "message": "entire data fetched successfully"
}
```

---

### 3. Get Todo by ID
**GET** `/getTodos/:id`

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "todo <id> data successfully fetched"
}
```

---

### 4. Update a Todo
**PUT** `/updateTodo/:id`

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated Description"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "updated successfully"
}
```

---

### 5. Delete a Todo
**DELETE** `/deleteTodo/:id`

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "deleted successfully"
}
```

## Key Files Explained

### `index.js`
This is the entry point of the application. It sets up the server, connects to the database, and defines middleware and routes.

### `database.js`
Contains the logic for connecting to MongoDB using Mongoose.

### `todo.js`
Defines the schema for a Todo item using Mongoose.

### Controllers
Each controller handles the logic for a specific operation (create, read, update, delete).

### Routes
Defines the API endpoints and maps them to the appropriate controllers.

## Running Tests

Currently, no tests are implemented. You can add tests using tools like [Jest](https://jestjs.io/) or [Mocha](https://mochajs.org/).

## Future Improvements

- Add user authentication and authorization.
- Implement advanced filtering and pagination for fetching todos.
- Add unit and integration tests.

## Contributing

Feel free to submit a pull request or open an issue if you find any bugs or have feature suggestions.
