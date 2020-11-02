//Core
import React, { useRef, useCallback, useContext } from "react";
import { Link } from "react-router-dom";

//Validations
import * as Yup from "yup";
import getValidationError from "../../utils/getValidationError";

//Custom Components
import { AnimationContainer, Container, Content, Background } from "./styles";
import Input from "../../components/input";
import Button from "../../components/Button";

//Icons
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
//Unform
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

//Custom Hooks
import { useAuth } from "../../hooks/AuthContext";
import { useToast } from "../../hooks/ToastContext";

import logo from "../../assets/images/logo.svg";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { user, signIn } = useAuth();
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
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

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: "success",
          title: "Erro na autenticação",
          description: "Ocorreu erro ao fazer login , cheque as credenciais",
        });
      }
    },
    [signIn, addToast]
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
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
          <Link to="/signup">
            <FiLogIn /> Criar Conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
