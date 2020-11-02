import styled, { keyframes } from "styled-components";
import signInBackgroundImg from "../../assets/images/sign-in-background.png";
import { shade } from "polished";

const appearFromLeft = keyframes`
  from{
    opacity : 0;
    transform : translateX(-50px);
  }
  to{
      opacity : 1;
      transform : translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation : ${appearFromLeft} 1s;

  h1 {
    text-align: center;
    margin-bottom: 24px;
  }
  form {
    margin: 80px;
    width: 330px;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height : 94%;
  width: 100%;
  max-width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
