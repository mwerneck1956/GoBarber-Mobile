import React, { useRef, useCallback , useContext } from "react";
import * as Yup from "yup";
import { Container, Content, Background } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import {useAuth} from '../../context/AuthContext';
import getValidationError from "../../utils/getValidationError";

import Input from "../../components/input";
import Button from "../../components/Button";

import logo from "../../assets/images/logo.svg";


interface SignInFormData{
  email : string;
  password : string;
}

 const SignIn: React.FC = () => {

  const {user,signIn} = useAuth();

  console.log(user);
  
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email Obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().required("Senha obrigatória"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email : data.email,
        password : data.password
      });
    } catch (err) {
      const errors = getValidationError(err);

      formRef.current?.setErrors(errors);
    }
  }, [signIn]);
  return (
    <Container>
      <Content>
        <img src={logo} alt="go barber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>
          <Input icon={FiMail} name="email" type="text" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="/">
          <FiLogIn /> Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
