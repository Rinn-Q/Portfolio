"use client";
import { useState } from "react";
import "./navbar.css";
import NavItem from "./nav-item";

export default function Navbar() {
  const [active, setActive] = useState(false);
  function clickButton() {
    setActive(!active);
  }
  console.log(active);
  return (
    <nav className="navbar">
      <h1 className="logo">
        <a href="/">Javkhlan</a>
      </h1>
      <div className="nav-container">
        <ul className={`nav-menu ${active ? "active" : ""}`}>
          <NavItem content="home" />
          <NavItem content="about" />
          <NavItem content="education" />
          <NavItem content="certifications" />
          <NavItem content="skills" />
          <NavItem content="experience" />
          <NavItem content="contact" />
        </ul>
        <img
          src={`${process.env.PUBLIC_URL}/img/menu.png`}
          alt=""
          onClick={clickButton}
        />
      </div>
    </nav>
  );
}
