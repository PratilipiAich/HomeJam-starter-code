import React from "react";
import logo from "../assets/logo.png";
import './styles/Navbar.css'
import InboxIcon from '@material-ui/icons/Inbox';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg " >
      <a className="navbar-brand ml-5" to="#">
        <img
        className="logo"
          src={logo}
          alt="HomeJam"
          
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        ria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        
      >
        <span className="navbar-toggler-icon"><MenuIcon className="hamburger" /></span>
      </button>
      <div className="collapse navbar-collapse  ml-5" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <i className="fa fa-search" id="search-icon"></i>
            <input
              className="form-control me-2"
              id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          <li className="nav-item">
            <a className="nav-link ml-5" aria-current="page" href="#">
              Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ml-5" href="#">
              Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ml-5 mr-5" href="#">
            <InboxIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
