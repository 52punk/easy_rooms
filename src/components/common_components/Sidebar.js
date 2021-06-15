import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = (props) => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <div>
      <div className="navbar" onClick={showSideBar}>
        <i class="fas fa-bars"></i>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <i class="fas fa-user-circle"></i>
          </li>
          <div className="user-details">UserName</div>
          <div className="navbar-items">
            <Link to="/profile">
              <li className="navbar-item">Profile</li>
            </Link>
            <Link to="/about">
              <li className="navbar-item">About</li>
            </Link>
            <li className="navbar-item" onClick={props.logoutHandler}>
              Logout
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;