import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
        const body = { description }
        const response = await fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        
        window.location = "/"
    } catch (err) {
        console.error(err.meesage);
    }

  }

  return (
    <>
      <h1 className="text-center mt-5">Your ToDo List</h1>
      <form onSubmit={onSubmitForm} className="d-flex mt-5 p-2">
        <input
          type="text"
          name="todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="todo"
          className="form-control"
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
