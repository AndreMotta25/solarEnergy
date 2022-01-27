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
  const [dataGrafics, setDataGrafics] = useState([]);
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

  // manipula dados para a criacao do grafico
  useEffect(() => {
    const filteredDates = [];
    let year = [];
    // const month = []
    // vai pegar os objetos que contem as datas e vai filtra-las
    async function getGenerations() {
      const objsGen = await (
        await fetch("http://localhost:3333/geracoes")
      ).json();
      console.log(objsGen);
      // nao deixa as datas se repetirem, caso aja uma repetida, a ultima e a que vale
      objsGen.forEach((obj) => {
        obj.ano = obj.data.split("/")[1];
        obj.mes = obj.data.split("/")[0];
        year = year.includes(obj.data.split("/")[1])
          ? ""
          : [...year, obj.data.split("/")[1]];
        if (filteredDates.length <= 0) {
          filteredDates.push(obj);
        } else {
          filteredDates.find((elem) => {
            if (elem.data == obj.data && elem.unidade == obj.unidade) {
              elem.kw = obj.kw;
            } else {
              filteredDates.push(obj);
            }
          });
        }
      });

      console.log(filteredDates);
      console.log(year);
    }

    getGenerations();
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
