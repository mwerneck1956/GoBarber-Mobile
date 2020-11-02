import React, { useCallback, useRef ,Fragment } from "react";

//Styles
import { Container, Content, Background } from "./styles";

//Icons
import { FiLogIn, FiMail, FiUser, FiLock, FiArrowLeft } from "react-icons/fi";

//Custom Components
import Input from "../../components/input";
import Button from "../../components/Button";
import logo from "../../assets/images/logo.svg";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Link , useHistory} from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/ToastContext';

//Validation
import * as Yup from "yup";
import getValidationError from '../../utils/getValidationError'


interface SignUpFormData{
  name : string,
  email : string,
  password : string,

}

const SignUp: React.FC = () => {

  const { addToast } = useToast();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
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

      await api.post('/users' , data);

      addToast({
        type : "success",
        title : "Cadastro Realizado com Sucesso",
        description : "Voce já pode fazer seu logon no GoBarber"
      })

      history.push('/');

    } catch (err) {
      const errors = getValidationError(err);

      formRef.current?.setErrors(errors);

      addToast({
        type : "error",
        title : "Ocorreu erro ao fazer cadastro , tente novamente!",
      })
    }
  }, [addToast,history]);

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
        <Link to = "/">
          <FiArrowLeft /> Voltar para logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
