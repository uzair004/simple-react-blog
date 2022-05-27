const Home = () => {
  const handleClick = (event) => {
    console.log("hello world");
    console.log("event: ", event);
  };

  const handleClickAgain = (name, event) => {
    console.log(`Hello ${name}`);
    console.log("Event:", event);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>

      <button onClick={(e) => handleClickAgain("Uzair", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
