import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
html{
   font-size: 62.5%;
   /*scroll-behavior: smooth; */
   overflow-x: hidden;
}
h1{
    color: ${({ theme }) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
}
h2{
     color: ${({ theme }) => theme.colors.heading}; 
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
}
h3{
    font-size: 1.8rem;
    font-weight: 400;
}
p{
   color: ${({ theme }) => theme.colors.text}; 
   opacity: .7;
   font-size: 1.65rem;
   line-height: 1.5;
   margin-top: 1rem;
   font-weight: 400;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.container{
    max-width: 120rem;
    margin: 0 auto;
}
.grid{
    display: grid;
    gap: 9rem;
}
.grid-two-column{
    grid-template-columns: repeat(2, 1fr);
}
.grid-three-column{
    grid-template-columns: repeat(3, 1fr);
}
  .common-heading {
    font-size: 3.88rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
    margin-bottom: 6rem 0;
  }

  input, textarea{
    max-width: 50rem;
    color:${({ theme }) => theme.colors.black};
    padding: 1.4rem 2.2rem;
    box-shadow : ${({ theme }) => theme.colors.shadowSupport};
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  input[type="submit"]{
    cursor: pointer;
    transition: all 0.2s;
    max-width: 12rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color:${({ theme }) => theme.colors.white};
    padding: 1.2rem 2rem;
    border-style : solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
  }

`;
export default GlobalStyle;
