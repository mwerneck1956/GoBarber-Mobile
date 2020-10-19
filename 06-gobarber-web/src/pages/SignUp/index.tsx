import React, { useCallback, useRef } from "react";
import { Container, Content, Background } from "./styles";
import { FiLogIn, FiMail, FiUser, FiLock, FiArrowLeft } from "react-icons/fi";
import Input from "../../components/input";
import Button from "../../components/Button";
import logo from "../../assets/images/logo.svg";
import * as Yup from "yup";

import getValidationError from '../../utils/getValidationError'
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("Email Obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().min(6, "Senha deve ter no mínimo de 6 dígitos"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationError(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="go barber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input icon={FiUser} name="name" type="text" placeholder="Nome" />
          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="">
          <FiArrowLeft /> Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
