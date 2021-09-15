import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logo1 from "../components/img/logo.png";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

import "../components/navbar.css";

export const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);

  const [isResponsiveclose, setResponsiveclose] = useState(false);

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <nav className="main-nav">
      <img className="logo1" src={logo1} alt={logo1} />
      <div className="container-navbar">
        {/* Responsive Menu Button */}
        {isResponsiveclose === true ? (
          <>
            <span
              className="menubar__button"
              style={{ display: "none" }}
              onClick={toggleClass}
            >
              {" "}
              <FiXCircle />{" "}
            </span>
          </>
        ) : (
          <>
            <span
              className="menubar__button"
              style={{ display: "none" }}
              onClick={toggleClass}
            >
              {" "}
              <FiAlignRight />{" "}
            </span>
          </>
        )}

        {/****  SUB-MENUS  ****/}

        <ul className={boxClass.join(" ")}>
          <li className="menu-item">
            <NavLink
              exact
              activeClassName="is-active"
              onClick={toggleClass}
              to={`/`}
            >
              {" "}
              Inicio{" "}
            </NavLink>
          </li>
          <li className="menu-item ">
            <NavLink
              onClick={toggleClass}
              activeClassName="is-active"
              to={`/LideresJuveniles`}
            >
              {" "}
              Lideres Juveniles{" "}
            </NavLink>{" "}
          </li>

          <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            {" "}
            <Link to="#">
              {" "}
              Quienes Somos <FiChevronDown />{" "}
            </Link>
            <ul className={boxClassSubMenu.join(" ")}>
              <li>
                {" "}
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to={`/Historia`}
                >
                  {" "}
                  Historia{" "}
                </NavLink>{" "}
              </li>

              <li>
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to={`/DireccionNacional`}
                >
                  {" "}
                  Direccion Nacional{" "}
                </NavLink>{" "}
              </li>

              <li>
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to={`/ValoresyPrincipios`}
                >
                  {" "}
                  Valores y Principios{" "}
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to={`/Organigrama`}
                >
                  {" "}
                  Organigrama{" "}
                </NavLink>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item ">
            <NavLink
              onClick={toggleClass}
              activeClassName="is-active"
              to={`/Propuestas`}
            >
              {" "}
              Propuestas{" "}
            </NavLink>{" "}
          </li>
          <li className="menu-item ">
            <NavLink
              onClick={toggleClass}
              activeClassName="is-active"
              to={`/Candidatos`}
            >
              {" "}
              Candidatos{" "}
            </NavLink>{" "}
          </li>
          <li className="menu-item ">
            <NavLink
              onClick={toggleClass}
              activeClassName="is-active"
              to={`/Contacts`}
            >
              {" "}
              Contactenos{" "}
            </NavLink>{" "}
          </li>
          <ul className="social-icons">
            <li>
              <a
                className="facebook"
                href="https://www.facebook.com/renovemoscol"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="twitter"
                href="https://www.twitter.com/Renovemos_Colom"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="instragram" href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};
