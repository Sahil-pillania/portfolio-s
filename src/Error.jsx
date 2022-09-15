import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./styles/Button";
const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.gif" alt="error" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 30rem;
  }
  .btn {
    margin-top: 3rem;
    font-size: 1.5rem;
  }
`;
export default Error;
