import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../images/trans_logo_white.png";

const Navbar = () => {
  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLink = document.querySelectorAll(".nav__link");
    const navMenu = document.getElementById("nav-menu");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    const linkAction = () => {
      navMenu.classList.remove("show-menu");
    };

    navLink.forEach((n) => n.addEventListener("click", linkAction));

    return () => {
      if (navToggle) {
        navToggle.removeEventListener("click", () => {
          navMenu.classList.add("show-menu");
        });
      }

      if (navClose) {
        navClose.removeEventListener("click", () => {
          navMenu.classList.remove("show-menu");
        });
      }

      navLink.forEach((n) => n.removeEventListener("click", linkAction));
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <img className="nav__logo" src={logo} alt="flow cafe logo" />
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                ΑΡΧΙΚΗ
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
                ΜΕΝΟΥ
              </a>
            </li>
            <li className="nav__item">
              <a href="#place" className="nav__link">
                ΦΩΤΟΓΡΑΦΙΕΣ
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
