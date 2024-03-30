const express = require('express')
const cors = require('cors')
const { getAllTodos, createTodo, updateTodo, deleteTodo, getTodoById }  = require('./db')


require('dotenv').config();

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

    res.status(200).json(allTodos);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await getTodoById(id)

    res.json(todo);
  } catch (err) {
    console.error(err.message);
  }
});


// create todo

app.post("/todos", async (req, res) => {
  try {

    const { description } = req.body;

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

    const { description } = req.body;

    // update a todo
    const update = await updateTodo(id, description)

    res.send(update);

  } catch (err) {
    console.error(err.message);
  }
});

// delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const msgDelete = await deleteTodo(id)

    res.send(msgDelete)
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log("Server running on PORT=" + PORT);
});

module.exports = {
  app
}