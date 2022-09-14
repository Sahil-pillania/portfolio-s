import React from 'react';
import styled from "styled-components";
import Button from "../styles/Button";
import {NavLink} from "react-router-dom";
const HeroSection = (props) => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{props.name}</h1>
          <p className="hero-para">
            I'm Sahil pillania. I am full stack developer, freelancer. I can
            work on frontend and backend both.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src={props.image} alt="image" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`

.section-hero-data{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.btn{
    max-width: 16rem;
}
.hero-top-data{
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({theme})=> theme.colors.helper}
}
.hero-heading{
    text-transform: uppercase;
    font-size: 6.4rem;

}
.hero-para{
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
}
.section-hero-image{
    display: flex;
    justify-content: center;
    align-items: center;
}
picture{
    text-align: center;
}
.hero-img{
    max-width: 80%;
}
`;

export default HeroSection;