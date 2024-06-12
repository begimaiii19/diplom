// Logo.js

import React from "react";
import "./Logo.css";
import logo from '../../img/aaaaaaaaaaaaaaa.png'; // Путь к изображению логотипа
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
    </div>
  )
}
