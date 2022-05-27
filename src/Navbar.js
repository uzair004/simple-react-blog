const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Simple Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "White",
            backgroundColor: "black",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
