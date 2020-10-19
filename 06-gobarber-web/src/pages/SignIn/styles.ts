import styled from "styled-components";
import signInBackgroundImg from "../../assets/images/sign-in-background.png";
import { shade } from "polished";
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
    color: #ff9000;
    display: block;
    margin-top: 15px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, "#ff9000")};
    }
    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
