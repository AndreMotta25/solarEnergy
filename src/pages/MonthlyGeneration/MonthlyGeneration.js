import React, { useState } from "react";
import InputDate from "../../components/InputDate/InputDate";
import Menu from "../../components/Menu/Menu";
import Title from "../../components/Title/Title";
import { Wrapper, Form } from "./styles";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MonthlyGeneration = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [kw, setKw] = useState(0);
  const [option, setOption] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // validate the data
  function handleSubmit(event) {
    event.preventDefault();
    let errors = {};
    const arrayStates = [startDate, kw, option];
    const arrayStatesString = ["Data", "Kw", "Unidade"];
    // structure made to save some if`s
    arrayStates.forEach((state, indice) => {
      if (!state || state === "Escolha um valor abaixo") {
        let prop = arrayStatesString[indice];
        errors[prop] = `${arrayStatesString[indice]} é obrigatorio`;
      }
    });
    // if the data is valid
    if (Object.getOwnPropertyNames(errors).length <= 0) {
      const data = String(startDate).split(" ");
      toast.success("Salvo com sucesso", { autoClose: 1000 });
      // Make the post
      fetch(`http://localhost:3333/geracoes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          unidade: option,
          data: `${data[1]}/${data[3]}`,
          kw: kw,
        }),
      });
      // redirect to dashboard
      navigate(`/dashboard`);
    }
    setErrors(errors);
  }
  return (
    <>
      <Menu></Menu>
      <Wrapper>
        <Title title="Lancamento de geracao mensal" />
        <Form onSubmit={handleSubmit}>
          <Select
            label="Unidade geradora"
            value={option}
            onChange={(event) => {
              setOption(event.target.value);
            }}
            error={errors.Unidade}
          />
          <InputDate
            label="Mes/ano"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
          />
          <Input
            label="Total kw gerado"
            value={kw}
            borderRadius={true}
            width={"30%"}
            type="number"
            onChange={(event) => {
              setKw(event.target.value);
            }}
            min={0}
            error={errors.Kw}
          />
          <Button>Cadastrar</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default MonthlyGeneration;
