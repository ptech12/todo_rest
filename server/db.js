// configuration file
const { Pool } = require('pg')
require('dotenv').config();


const pool = new Pool({
  user: process.env.PSQL_USER,
  password: process.env.PSQL_PASS,
  host: process.env.PSQL_HOST,
  port: process.env.PSQL_PORT,
  database: process.env.PSQL_DB,
});

/**
 * get ALL TODOS
 * @returns rows from database
 */
 async function getAllTodos() {
  
  const result = await pool.query("SELECT * FROM todo ORDER BY todo_id");

  return result.rows;
}

/**
 * get  TODOS by ID
 * @param  id 
 * @returns row from database
 */
 async function getTodoById(id) {
  const result = await pool.query("SELECT * FROM todo WHERE todo_id = $1 ", [
    id,
  ]);

  // logic for empty rows

  if (result.rowCount === 0) {
    return false
  } else {
    return result.rows[0];
  }
}

/**
 * create a new todo
 * @param description - todo description
 * @returns rows from database 
 */
 async function createTodo(description) {
  const result = await pool.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *",
    [description]
  );

  return result.rows[0];
}

/**
 * update todo
 * @param id - todo id
 * @param  description 
 * @returns string
 */
 async function updateTodo(id, description) {
  const result = await pool.query(
    "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
    [description, id]
  );

  return result.rows[0];
}


/**
 *  delete TODO by ID
 * @param id 
 * @returns string
 */
 async function deleteTodo(id) {
  const result = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

  return JSON.stringify(`todo_id=${id} deleted succeesfully`);
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  deleteTodo,
  updateTodo
}