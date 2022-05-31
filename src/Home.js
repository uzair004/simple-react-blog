import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("Uzair");

  useEffect(() => {
    fetch("http://localhost:8000/blogsss")
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetching resources failed!");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      <button onClick={() => setName("Zubair")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
