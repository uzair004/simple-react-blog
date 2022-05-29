import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "blog 1", body: "lorem ipsum...", author: "Uzair" },
    { id: 2, title: "blog 2", body: "lorem ipsum...", author: "Khan" },
    { id: 3, title: "blog 3", body: "lorem ipsum...", author: "John" },
    { id: 4, title: "blog 4", body: "lorem ipsum...", author: "Doe" },
    { id: 5, title: "blog 5", body: "lorem ipsum...", author: "Uzair" },
  ]);

  const [name, setName] = useState("Uzair");

  useEffect(() => {
    console.log("Use Effect ran");
    console.log("state: ", name);
  }, [name]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Uzair")}
        title="Uzair Blogs!"
        handleDelete={handleDelete}
      />

      <button onClick={() => setName("Zubair")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
