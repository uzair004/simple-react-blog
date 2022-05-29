import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "blog 1", body: "lorem ipsum...", author: "Uzair" },
    { id: 2, title: "blog 2", body: "lorem ipsum...", author: "Khan" },
    { id: 3, title: "blog 3", body: "lorem ipsum...", author: "John" },
    { id: 4, title: "blog 4", body: "lorem ipsum...", author: "Doe" },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>author: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
