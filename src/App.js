import "./App.css";
import { useState } from "react";
function App() {
  const [input, setInput] = useState([{ id: 1, text: "" }]);
  function changeHandler(e) {
    return setInput((prev) => {
      return [
        ...prev,
        {
          id: Math.random().toLocaleString(),
          text: e.target.value.trim(),
        },
      ];
    });
  }

  function deleteHandler(id) {
    return input.map((todo) => id !== todo.id);
  }
  return (
    <div className="container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input);
        }}
      >
        <input type="text" name="text" onChange={changeHandler} />
        <button className="btn" type="submit">
          Add new Todos
        </button>
      </form>
      {input.length &&
        input.map((todo) => {
          return (
            <div className="todos__item" key={todo.id} id={todo.id}>
              {todo.text}
            </div>
          );
        })}
    </div>
  );
}

export default App;
