import React from "react";
import { NavLink } from "react-router-dom";
import  styled  from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    font-size: 1.5rem;

    .navbar-link {
      list-style: none;
      color: black;

      &:link, &:visited{
        display: inline-block;
        text-decoration: none;
        font-size: 1.5rem;
        text-transform: uppercase;
        color: ${({theme})=> theme.colors.black};
        transition: color 0.3 linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
`;

export default Navbar;
