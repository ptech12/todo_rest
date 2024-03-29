// configuration file
import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.PSQL_USER,
  password: process.env.PSQL_PASS,
  host: process.env.PSQL_HOST,
  port: process.env.PSQL_PORT,
  database: process.env.PSQL_DB,
});

// get ALL TODOS
export async function getAllTodos() {
  const result = await pool.query("SELECT * FROM todo");

  return result.rows;
}

// get  TODOS by ID
export async function getTodoById(id) {
  const result = await pool.query("SELECT * FROM todo WHERE todo_id = $1 ", [
    id,
  ]);
  // logic for empty rows
  if (result.rows.length === 0) {
    return "Nothing Found"
  } else {
    return result.rows;
  }
}

// create a new todo
export async function createTodo(description) {
  const result = await pool.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *",
    [description]
  );

  return result.rows[0];
}

// update todo
export async function updateTodo(id, description) {
  const result = await pool.query(
    "UPDATE todo SET description = $1 WHERE todo_id = $2",
    [description, id]
  );

  return JSON.stringify("Todo was updated");
}


// delete TODO by ID
export async function deleteTodo(id) {
  const result = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

  return JSON.stringify(`todo_id=${id} deleted succeesfully`);
}
