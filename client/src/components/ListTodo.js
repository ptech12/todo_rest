import React, { useEffect, useState } from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/todos");
      const data = await response.json();

      setTodos(data);
    } catch (err) {
      console.error(err.meesage);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {"  "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>Delet</td>
            </tr> */}
          {todos.map((todo) => (
            <tr>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodo;
