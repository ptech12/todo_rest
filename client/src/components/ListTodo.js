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


  const deleteTodo = async(id) => {
    try {
        const deleteTodo = await fetch(`http://localhost:8080/todos/${id}`, {
            method: "DELETE",
        });

        // using filter so that refresh not required
        setTodos(todos.filter(todo => todo.todo_id !== id));
        
    } catch (err) {
        console.error(err.message);
    }
  }

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
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>
                        Delete
                    </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodo;
