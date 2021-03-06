import React, { useEffect, useRef, useState } from "react";
import InputDate from "../../components/InputDate/InputDate";
import { Wrapper, Form } from "./styles";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import GenericPage from "../GenericPage/GenericPage";

const MonthlyGeneration = () => {
  const [measurementRecord, setMeasurementRecord] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [kw, setKw] = useState(0);
  const [option, setOption] = useState("");
  const [errors, setErrors] = useState({});
  const existingItem = useRef("");
  const navigate = useNavigate();

  // will update or add a measurement
  function putOrPost(type, id = "") {
    const data = String(startDate).split(" ");
    fetch(`http://localhost:3333/geracoes/${id}`, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        unidade: option,
        data: `${data[1]}/${data[3]}`,
        kw: kw,
      }),
    });
  }
  // checks if a measurement already exists
  function alreadyRegistered() {
    const data = String(startDate).split(" ");
    const itemExist = measurementRecord.find(
      (measurement) =>
        measurement.unidade === option &&
        `${data[1]}/${data[3]}` === measurement.data
    );

    existingItem.current = itemExist ? itemExist.id : "";
    return existingItem.current;
  }
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
        errors[prop] = `${arrayStatesString[indice]} ?? obrigatorio`;
      }
    });

    if (Object.getOwnPropertyNames(errors).length <= 0) {
      // if the person tries to change a date already set, an alert will be launched
      if (
        alreadyRegistered() &&
        window.confirm(
          "Ja existe uma unidade com essa data. Se voce insistir iremos sobreescreve-la"
        )
      ) {
        toast.success("Medida Atualizada", { autoClose: 1000 });
        putOrPost("PUT", existingItem.current);
      } else if (!existingItem.current) {
        toast.success("Salvo com sucesso", { autoClose: 1000 });
        putOrPost("POST");
      } else {
        toast("Redirecionando para a DashBoard", { autoClose: 1000 });
      }
      existingItem.current = "";
      // redirect to dashboard
      navigate(`/dashboard`);
    }
    setErrors(errors);
  }
  // take the measurements made earlier
  useEffect(() => {
    async function getMeasurementRecord() {
      const measurement = await (
        await fetch("http://localhost:3333/geracoes")
      ).json();
      console.log(measurement);
      setMeasurementRecord(measurement);
    }
    getMeasurementRecord();
  }, []);
  return (
    <>
      <GenericPage title="Lan??amento de gera????o mensal">
        <Wrapper>
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
      </GenericPage>
    </>
  );
};
export default MonthlyGeneration;
