import React, { useEffect, useState } from "react";
import { Description } from "../InputDate/styles";
import { Selection, Container, Option } from "./styles";
import { Error } from "../Input/styles";

const Select = ({ label, error, ...otherProps }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      let units = await (await fetch("http://localhost:3333/unidades")).json();
      units = units.filter((unit) => unit.ativo == true);
      setData(units);
    }
    getData();
  }, []);
  return (
    <>
      <Container>
        <Description>{label}</Description>
        <Selection {...otherProps}>
          <option defaultValue>Escolha um valor abaixo</option>
          {data.map((unit) => (
            <Option key={unit.id} value={unit.id}>
              {unit.apelido}
            </Option>
          ))}
        </Selection>
        <Error>{error}</Error>
      </Container>
    </>
  );
};

export default Select;
