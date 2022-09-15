import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              to="/"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to="/about"
              onClick={() => setOpenMenu(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to="/services"
              onClick={() => setOpenMenu(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to="/contact"
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* // navbar icons  */}
        <div className="mobile-navbar-btn">
          <CgMenuLeftAlt
            name="menu-btn"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgClose
            name="close-btn"
            className="close-btn mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    font-size: 1.5rem;

    li {
      list-style: none;

      .navbar-link {
        list-style: none;
        color: black;

        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.5rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3 linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .close-btn {
      display: none;
    }
  }

  .mobile-navbar-btn[name="close-btn"] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
    ${"" /* // hide the original navbar menu  */}
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;

      transform: translateX(100%);

      visibility: hidden;
      opacity: 0;

      li {
        .navbar-link {
          list-style: none;
          color: black;

          &:link,
          &:visited {
            font-size: 4.2rem;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }
    .active .close-btn {
      display: inline-block;
    }
    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0%);
      z-index: 999;
    }
  }
`;

export default Navbar;
