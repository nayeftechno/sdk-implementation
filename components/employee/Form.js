import { useState, useRef } from "react";
import { useMainStore } from "../../contexts/MainContext";

function Form() {
  const { toDoStore } = useMainStore();
  const { addTask } = toDoStore;

  const [title, setTitle] = useState("");
  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title: title.trim(), isCompleted: false });
    setTitle("");
    titleRef.current.focus();
  };

  const handleChange = ({ target: { value } }) => {
    setTitle(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          value={title}
          onChange={handleChange}
          type={"text"}
          placeholder="type a new task..."
          className="form-control"
          ref={titleRef}
          autoFocus
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group form-padding-top text-center">
        <input
          type={"submit"}
          value={"Add To List"}
          className="btn btn-success"
          disabled={!title?.trim()?.length}
        />
      </div>
    </form>
  );
}

export default Form;
