import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact Us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55663.09348244455!2d76.28528513260454!3d29.31333757359886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391204560fee9ac5%3A0xe427b9de50b77db0!2sJind%2C%20Haryana!5e0!3m2!1sen!2sin!4v1663177521860!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container contact-form">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mlevjelj"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea name="message" id="" cols="30" rows="6" required />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 6rem 0 5rem 0;

  .container {
    text-align: center;
  }
  .contact-form {
    max-width: 50rem;
    margin: auto;
    margin-top: 6rem;
  }
  .contact-inputs {
    display: flex;
    flex-direction: column;
    gap: 3rem;
      input[type="submit"]{
    cursor: pointer;
    transition: all 0.2s;

        &:hover{
          background-color: &{({theme})=> theme.colors.white};
          border: 1px solid &{({theme})=> theme.colors.btn};
          color: &{({theme})=> theme.colors.btn};
          transform: scale(0.9);

        }
      }
  }
`;

export default Contact;
