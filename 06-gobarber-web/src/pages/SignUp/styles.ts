import styled from "styled-components";
import signUpBackground from "../../assets/images/sign-up-background.png";
import { shade } from "polished";
import { sign } from "crypto";
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  h1 {
    text-align : center;
    margin-bottom: 24px;
  }
  form {
    margin: 80px;
    width: 340px;
    
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      text-align: center;
      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }
  > a {
    display: flex;
    align-items: center;
    color: #F4EDE8;
    display: block;
    margin-top: 15px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, "#F4EDE8")};
    }
    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
