import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Climate Change
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/co2">
                CO2 <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/globaltemp">
                Global Temp
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/glaciersize">
                Glacier Size
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/sealevel">
                Sea Level
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/co2list">
                CO2 List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
