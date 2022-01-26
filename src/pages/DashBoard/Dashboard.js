import React, { useEffect } from "react";
import { ContainerCards, WrapperPanel, Panel } from "./styles";
import Wrapper from "../../components/Wrapper/Wrapper";

import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import url from "../../assets/grafico.png";
import Menu from "../../components/Menu/Menu";
const Dashboard = () => {
  return (
    <>
      <Menu></Menu>
      <Wrapper>
        <Title title="Dashboard" />
        <ContainerCards>
          <Card label="Total Unidades" unidades={60}></Card>
          <Card label="Unidades Ativas" unidades={60}></Card>
          <Card label="Unidades Inativas" unidades={60}></Card>
          <Card label="Media de energia" unidades={60}></Card>
        </ContainerCards>
        <WrapperPanel>
          <Panel src={url} />
        </WrapperPanel>
      </Wrapper>
    </>
  );
};

export default Dashboard;
