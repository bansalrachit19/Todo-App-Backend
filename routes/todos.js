const express = require("express");

const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodos, getTodosById } = require("../controllers/getTodos");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

//define api routes
router.post("/createTodo", createTodo);//jab /createTodo route par jaunga to createTodo contoller se map karva dia
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodosById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

//export
module.exports = router;