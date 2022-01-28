import React, { useState, useEffect } from "react";
import { Container, Photo, Button, Title, LogoContainer, Logo } from "./styles";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const history = useNavigate();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  function checkFields(e) {
    e.preventDefault();
    const errors = {};
    if (!email) {
      errors.email = "Email é obrigatorio";
    }
    if (!passWord) {
      errors.passWord = "password é obrigatorio";
    }
    if (Object.getOwnPropertyNames(errors) <= 0) {
      toast("Entrando", { autoClose: 500 });
      history("/dashboard");
    }
    setErrors(errors);
  }
  return (
    <Container>
      <Photo />

      <Form width={"50%"} onSubmit={checkFields}>
        {/* Eu tive a ideia de deixar o onClick dentro do componente input, mas assim como eu teria acesso
        ao estados desta pagina*/}
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>

        <Title>Seja bem vindo</Title>
        <Input
          Img={HiOutlineMail}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          error={errors.email}
        />
        <Input
          Img={RiLockPasswordLine}
          type="password"
          placeholder="Password"
          value={passWord}
          onChange={(event) => {
            setPassWord(event.target.value);
          }}
          error={errors.passWord}
        />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
// Img = { HiOutlineMail };
// label = "Email";
