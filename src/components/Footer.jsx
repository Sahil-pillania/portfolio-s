import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started </h3>
            <h3>Talk us today </h3>
          </div>
          <div>
            <NavLink to="/contact">
              <Button> Get Started </Button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* // footer section  */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Sahil Pillania</h3>
            <p> A passionate Web developer.</p>
          </div>
          {/* 2nd  */}
          <div className="footer-subscribe">
            <h3>Subscribe for updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          {/* 3rd  */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a href="#" target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
          {/* 4th  */}
          <div className="footer-contact">
            <h3>Call us</h3>
            <h3>+91 1234567799</h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container">
            <p>
              @{new Date().getFullYear()} Sahil Pillania . All Rights Reserved
            </p>
            {/* <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div> */}
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 6rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    font-size: 1.5rem;
    padding: 12rem 0 4rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size: 1.5rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.5rem;
    }

    .footer-social {
      color: white;
      .footer-social--icons {
        display: flex;
        gap: 2rem;

        div {
          padding: 1rem;
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.colors.white};

          .icons {
            color: ${({ theme }) => theme.colors.white};
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
          }
        }
      }
    }
    .footer-bottom--section {
      padding-top: 3rem;
      margin: auto;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
      .container {
        margin: auto;
        text-align: center;
      }
    }
  }
`;

export default Footer;
