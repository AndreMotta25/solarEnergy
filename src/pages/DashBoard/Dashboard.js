import React, { useEffect, useState } from "react";
import { ContainerCards, WrapperPanel, Panel } from "./styles";
import Wrapper from "../../components/Wrapper/Wrapper";

import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import url from "../../assets/grafico.png";
import Menu from "../../components/Menu/Menu";

const Dashboard = () => {
  const [units, setUnits] = useState("");
  const [unitsActive, setUnitsActive] = useState("");
  const [unitsDisabled, setUnitsDisabled] = useState("");
  const [average, setAverage] = useState("");

  // removes all letters, we use it to turn all models into a summable number
  function removeLetters(text) {
    return text.replace(/[^0-9\.]+/g, "");
  }
  // get the data to fill in the cards
  useEffect(() => {
    async function getData() {
      const datas = await (
        await fetch("http://localhost:3333/unidades/")
      ).json();
      setUnitsActive(() => {
        return datas.filter((unit) => {
          return unit.ativo === true;
        });
      });
      setUnits(datas.length);
      setUnitsDisabled(() => {
        return datas.filter((unit) => {
          return unit.ativo === false;
        });
      });

      // console.log("adasd245865".replace(/[^0-9\.]+/g, ""));
      setAverage(
        new Intl.NumberFormat({ maximumSignificantDigits: 2 }).format(
          datas
            .map((unit) => +removeLetters(unit.modelo))
            .reduce((acc, value) => acc + value) / datas.length
        ) + "Kw"
      );
    }
    getData();
  }, []);
  return (
    <>
      <Menu></Menu>
      <Wrapper>
        <Title title="Dashboard" />
        <ContainerCards>
          <Card label="Total Unidades" unidades={units}></Card>
          <Card label="Unidades Ativas" unidades={unitsActive.length}></Card>
          <Card
            label="Unidades Inativas"
            unidades={unitsDisabled.length}
          ></Card>
          <Card label="Media de energia" unidades={average} large={true}></Card>
        </ContainerCards>
        <WrapperPanel>
          <Panel src={url} />
        </WrapperPanel>
      </Wrapper>
    </>
  );
};

export default Dashboard;
