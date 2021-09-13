import React, {useState} from "react";
import "../../variables.css";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    const [shownavToggle, setShownavToggle] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">Laburnum Foods</h1>
        <ul className={showNav ? "nav-links active" : "nav-links"} id="nav-links"
        >
          <Link to="/">
            <li>
              <a id="home">Home</a>
            </li>
          </Link>
          <Link to="/signup">
            <li>
              <button className="btn btn-SignUp">Sign Up</button>
            </li>
          </Link>
        </ul>
        <div className={showNav ? "navToggle active" : "navToggle"} id="navToggle" onClick={() => setShowNav(!showNav)} >
            <span className="bar bar-one"></span>
            <span className="bar bar-two"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
