import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("Uzair");

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      <button onClick={() => setName("Zubair")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
