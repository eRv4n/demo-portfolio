import "./Navbar.scss";
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
    const body = document.body;
    const navWrap = document.querySelector(".re-nav-wrap");
    const homeWrapP = document.querySelector(".home-wrap div p");
    const backgroundColor = themeMode === "light_mode" ? "#212529" : "#f8f9fa";
    const color = themeMode === "light_mode" ? "#f8f9fa" : "#212529";

    body.style.backgroundColor = backgroundColor;
    navWrap.style.backgroundColor = backgroundColor;
    homeWrapP.classList.toggle("dark");
    homeWrapP.classList.toggle("light-gray");
    body.style.color = color;

    // Navbar Transparent
  }, [themeMode]);

  const [showNav, setShowNav] = useState("not-show");

  const showNavbar = () => {
    if (showNav === "show") {
      document.body.style.overflow = "visible";
      setShowNav("not-show");
    } else {
      document.body.style.overflow = "hidden";
      setShowNav("show");
    }
    // showNav === "show" ? setShowNav("not-show") : setShowNav("show");
  };

  window.addEventListener("scroll", () => {
    const navbarBG = document.querySelector(".navbar");
    if (window.scrollY < 10) {
      console.log(window.scrollY);
      navbarBG.classList.add("nav-transparent");
    } else {
      // navbarBG.classList.remove("nav-transparent");
    }
  });

  return (
    <>
      <nav className={`navbar bg-${themeMode} nav-transparent`}>
        <div className={`nav-wrap container`}>
          {/* Logo */}
          <a className="nav-brand" href="#home">
            R<span>Creative</span>.
          </a>
          {/* Link */}
          <div className="link">
            {navbar.map((item) => (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
          {/* Theme */}
          <span className="theme">
            <button className={`material-symbols-outlined bg-${themeMode}-nav`} onClick={themeToggle}>
              {themeMode}
            </button>
          </span>
          {/* Responsive Navbar */}
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
                    <a key={item.name} href={item.href} onClick={showNavbar}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Invisible Button */}
        <button className={`closeBtn ${showNav}`} onClick={showNavbar}></button>
      </nav>
    </>
  );
};

export default Navbar;
