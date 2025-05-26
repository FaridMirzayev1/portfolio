import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ margin: "10px" }}>Haqqında</Link>
      <Link to="/projects" style={{ margin: "10px" }}>İş Nümunələri</Link>
      <Link to="/contact" style={{ margin: "10px" }}>Əlaqə</Link>
    </nav>
  );
};

export default Navbar;
