import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const [name, setName] = useState("Uzair");
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

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
