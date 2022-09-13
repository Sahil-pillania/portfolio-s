import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled,{ThemeProvider} from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        {/* <img src="./images/logo.png" alt="logo" /> */}
        <span>SaHiL PiLLaNiA</span>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.bg};

  span {
    font-size: 2.5rem;
    color: orange;
  }
`;

export default Header;
