import React from "react";
import { Container, Content, Background } from "./styles";
import { FiLogIn , FiMail , FiLock } from "react-icons/fi";
import Input from "../../components/input";
import Button from "../../components/Button";

import logo from "../../assets/images/logo.svg";
const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="go barber" />
      <form>
        <h1>Faça seu Logon</h1>
        <Input icon ={FiMail} name="text" type="text" placeholder="email" />
        <Input icon={FiLock} name="password" type="password" placeholder="senha" />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="">
        <FiLogIn /> Criar Conta
      </a>
      
    </Content>
    <Background />
  </Container>
);
export default SignIn;
