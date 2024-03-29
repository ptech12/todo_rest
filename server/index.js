import epxress from "express";
import cors from "cors";
import pool from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const app = epxress();
const PORT = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(epxress.json()); // req.body

// Routes //

// create todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todo

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");

    res.status(200).json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1 ", [
      id,
    ]);
    res.json(todo.rows);
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
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(`todo_id=${id} deleted succeesfully`)
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log("Server running on PORT=" + PORT);
});
