import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [pending, setPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setPending(true);

    setTimeout(() => {
      fetch("http://localhost:8000/blogs/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then((res) => {
        setPending(false);
        navigate("/");
      });
    }, 5000);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="uzair">Uzair</option>
          <option value="zubair">Zubair</option>
        </select>
        {!pending && <button>Add Blog</button>}
        {pending && (
          <button disabled style={{ backgroundColor: "grey" }}>
            Adding blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
