import "./Navbar.scss";
import "../../css/_utility.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navbar = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  const [themeMode, setThemeMode] = useState("light_mode");

  const themeToggle = () => {
    themeMode === "light_mode" ? setThemeMode("dark_mode") : setThemeMode("light_mode");
  };

  return (
    <>
      <nav className="navbar">
        <div className={`nav-wrap container`}>
          <h1 className="logo">
            R<span>Creative</span>.
          </h1>
          <div className="link">
            {navbar.map((item) => (
              <NavLink key={item.name} to={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <span className="theme">
            <button class={`material-symbols-outlined ${themeMode === "light_mode" ? "light_mode" : "dark_mode"}-bg`} onClick={themeToggle}>
              {themeMode}
            </button>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
