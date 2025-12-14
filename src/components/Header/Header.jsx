import {useState} from "react";
import Nav from "../Nav/Nav";
import clsx from "clsx";
import Logo from "/src/assets/logo.svg";
import menuIcon from "/src/assets/icon-hamburger.svg";
import closeIcon from "/src/assets/icon-close.svg";
import "./Header.scss";

export default function Header({screenSize}) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  const menuClass = clsx("menu-container", menuOpen && "open-menu");

  return (
    <header>
      <nav>
        <img src={Logo} alt="Loopstudios logo" className="logo" />
        {screenSize < 900 ? (
          <>
            <button aria-label="Menu toggle" onClick={toggleMenu}>
              <img
                src={menuOpen ? closeIcon : menuIcon}
                className="menu-icon"
              />
            </button>

            <section className={menuClass}>
              <ul>
                <a href="#about">
                  <li>ABOUT</li>
                </a>
                <a href="#careers">
                  <li>CAREERS</li>
                </a>
                <a href="#events">
                  <li>EVENTS</li>
                </a>
                <a href="#products">
                  <li>PRODUCTS</li>
                </a>
                <a href="#support">
                  <li>SUPPORT</li>
                </a>
              </ul>
            </section>
          </>
        ) : (
          <Nav />
        )}
      </nav>

      <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
    </header>
  );
}
