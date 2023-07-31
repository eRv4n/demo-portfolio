import "./Navbar.scss";
// import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navbar = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  const [themeMode, setThemeMode] = useState("light_mode");

  const themeToggle = () => {
    themeMode === "light_mode" ? setThemeMode("dark_mode") : setThemeMode("light_mode");
    console.log(themeMode);
  };

  useEffect(() => {
    if (themeMode === "light_mode") {
      document.querySelector("body").style.backgroundColor = "#212529";
      document.querySelector("body").style.color = "#f8f9fa";
      document.querySelector(".re-nav-wrap").style.backgroundColor = "#212529";
    } else {
      document.querySelector("body").style.backgroundColor = "#f8f9fa";
      document.querySelector("body").style.color = "#212529";
      document.querySelector(".re-nav-wrap").style.backgroundColor = "#f8f9fa";
    }
  }, [themeMode]);

  const [showNav, setShowNav] = useState("not-show");

  const showNavbar = () => {
    showNav === "show" ? setShowNav("not-show") : setShowNav("show");
    console.log(showNav);
  };

  return (
    <>
      <nav className={`navbar bg-${themeMode}`}>
        <div className={`nav-wrap container`}>
          <h1 className="nav-brand">
            R<span>Creative</span>.
          </h1>
          <div className="link">
            {navbar.map((item) => (
              // <NavLink key={item.name} to={item.href}>
              //   {item.name}
              // </NavLink>
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
          <span className="theme">
            <button className={`material-symbols-outlined bg-${themeMode}-nav`} onClick={themeToggle}>
              {themeMode}
            </button>
          </span>
          <div className="nav-responsive">
            <button className="material-symbols-outlined" onClick={showNavbar}>
              menu
            </button>
            <div className={`re-nav-wrap ${showNav}`}>
              <div className="close">
                <button className="material-symbols-outlined" onClick={showNavbar}>
                  close
                </button>
              </div>
              <div className="items">
                <span className={`re-theme`}>
                  <button className={`material-symbols-outlined bg-${themeMode}-nav`} onClick={themeToggle}>
                    {themeMode}
                  </button>
                </span>
              </div>
              <div className="re-item">
                <div className="re-link">
                  {navbar.map((item) => (
                    // <NavLink key={item.name} to={item.href} onClick={showNavbar}>
                    //   {item.name}
                    // </NavLink>
                    <a key={item.name} href={item.href} onClick={showNavbar}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={`closeBtn ${showNav}`} onClick={showNavbar}></button>
      </nav>
    </>
  );
};

export default Navbar;
