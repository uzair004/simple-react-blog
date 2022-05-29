import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "blog 1", body: "lorem ipsum...", author: "Uzair" },
    { id: 2, title: "blog 2", body: "lorem ipsum...", author: "Khan" },
    { id: 3, title: "blog 3", body: "lorem ipsum...", author: "John" },
    { id: 4, title: "blog 4", body: "lorem ipsum...", author: "Doe" },
    { id: 5, title: "blog 5", body: "lorem ipsum...", author: "Uzair" },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Uzair")}
        title="Uzair Blogs!"
      />
    </div>
  );
};

export default Home;
