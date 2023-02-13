import "./App.css";
import { useState } from "react";
function App() {
  const [val, setval] = useState("");
  const [input, setInput] = useState([{ id: 1, text: val }]);

  function changeHandler(e) {
    return setval(e.target.value);
  }

  function submitHandler(e) {
    {
      e.preventDefault();
      console.log(input);
      setInput((prev) => {
        return [
          ...prev,
          {
            id: Math.random().toLocaleString(),
            text: val,
          },
        ];
      });
      return setval("");
    }
  }

  function deleteHandler(id) {
    return setInput(input.filter((todo) => id !== todo.id));
  }
  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <input type="text" name="text" onChange={changeHandler} value={val} />
        <button className="btn" type="submit">
          Add new Todos
        </button>
      </form>
      {input.length &&
        input.map((todo) => {
          return (
            <div
              className="todos__item"
              key={todo.id}
              id={todo.id}
              onClick={() => deleteHandler(todo.id)}
            >
              {todo.text}
            </div>
          );
        })}
    </div>
  );
}

export default App;
