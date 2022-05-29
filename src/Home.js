import { useState } from "react";

const Home = () => {
  const [country, setCountry] = useState("Pakistan");
  const [age, setAge] = useState(25);

  const handleClick = (event) => {
    setCountry("United States");
    setAge(32);
  };

  const handleClickAgain = (name, event) => {
    console.log(`Hello ${name}`);
    console.log("Event:", event);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        from {country}, and {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>

      <button onClick={(e) => handleClickAgain("Uzair", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
