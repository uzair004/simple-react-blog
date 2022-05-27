import "./App.css";

function App() {
  const title = "Welcome to new blog";
  const likes = 50;
  const person = { name: "he", male: true };
  const value = null;
  const arr = [1, 2, 3, 4];
  const googleLink = "http://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Number {likes} times</p>

        <p>Boolean: {String(person.male)}</p>
        <p>falsy: {String(value)}</p>
        <p>Array: {arr}</p>
        <a href={googleLink}>Google link</a>
        <p>Object: {JSON.stringify(person)}</p>
      </div>
    </div>
  );
}

export default App;
