import { useState, useRef } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          disabled={!title?.length}
        />
      </div>
    </form>
  );
}

export default Form;
