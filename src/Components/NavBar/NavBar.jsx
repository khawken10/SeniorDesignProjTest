import React from "react"
import { Link } from "react-router-dom"
import home_logo from "../Assets/butterfly-logo.png"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/dash" className="home-link">
        <img src={home_logo} alt="go home" className="home-logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Records</Link>
        </li>
        <li>
          <Link to="/">Test</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
