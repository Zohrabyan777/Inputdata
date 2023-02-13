import { useState } from "react";
import "./input.css";
export default function UserInput() {
  const [title, setTitle] = useState({
    title: "",
    text: "",
    author: "MArio",
    join: false,
  });
  function typehandler(e) {
    const { name, value, type, checked } = e.target;
    setTitle((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }
  return (
    <div
      className="creat"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(title);
        setTitle({
          title: "",
          text: "",
          author: "MArio",
          join: false,
        });
      }}
    >
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog Title</label>
        <input
          type="text"
          value={title.title}
          onChange={typehandler}
          name="title"
        />
        <label>Blog Body</label>
        <textarea name="text" onChange={typehandler} value={title.text} />
        <label>Blog author</label>
        <select value={title.author} onChange={typehandler} name="author">
          <option value="Mario">Mario</option>
          <option value="Ben">Ben</option>
        </select>
        <label className="check">
          Join Newslatter{" "}
          <input
            className="checked"
            type="checkbox"
            value={title.join}
            name="join"
            onChange={typehandler}
          />
        </label>
        <button type="submit">Add Blog</button>{" "}
      </form>
    </div>
  );
}
