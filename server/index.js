const express = require("express");
const cors = require("cors");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
} = require("./db");

const utils = require("./utils/todoSchema.js");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes //

// get all todo

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await getAllTodos();

    res.status(200).send(allTodos);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await getTodoById(id);

    if (!todo) {
      res.status(404).send("The task with the provided ID does not exists");
    } else {
      res.status(200).json(todo);
    }
  } catch (err) {
    console.error(err.message);
  }
});

// create todo

app.post("/todos", async (req, res) => {
  try {
    const { error } = utils.validateTask(req.body);
    const { description } = req.body;

    if (error) return res.status(400).send(`${error.message}`);

    const newTodo = await createTodo(description);

    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// update all todo
app.put("/todos/:id", async (req, res) => {
  try {
    // destructure params and ID
    const { id } = req.params;

    const { error } = utils.validateTask(req.body);
    const { description } = req.body;

    // check for task ID exits
    const todo = await getTodoById(id);

    if (!todo) {
      res.status(404).send("The task with the provided ID does not exists");
    }

    // validate request
    if (error) return res.status(400).send(`${error.message}`);

    // update a todo
    const update = await updateTodo(id, description);

    res.send(update);
  } catch (err) {
    console.error(err.message);
  }
});

// delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // check for task ID exits
    const todo = await getTodoById(id);

    if (!todo) {
      res.status(404).send("The task with the provided ID does not exists");
    }


    const msgDelete = await deleteTodo(id);

    res.send(msgDelete);
  } catch (err) {
    console.error(err.message);
  }
});



module.exports = app.listen(PORT, () => {
  console.log("Server running on PORT=" + PORT);
});
