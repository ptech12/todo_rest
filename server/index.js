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
    console.error(err);
  }
});

// get all todo

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");

    res.status(200).json(allTodos.rows);
  } catch (error) {
    console.error(error);
  }
});

// get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1 ", [
      id,
    ]);
    res.json(todo.rows)
  } catch (error) {
    console.log(error);
  }
});

// update all todo

// delete todo

app.listen(PORT, () => {
  console.log("Server running on PORT=" + PORT);
});
