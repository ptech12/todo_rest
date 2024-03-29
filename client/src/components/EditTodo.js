import React, {useState} from "react";

const EditTodo = ({ todo }) => {

    const [description, setDescription] = useState(todo.description);
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
                <input type="text" name="editTodo" id="edit"
                className="form-control"
                value={description} />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal">
                Edit
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
