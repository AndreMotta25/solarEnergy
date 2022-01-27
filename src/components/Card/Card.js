import React from "react";
import { ContainerCard, Title, Unidades } from "./styles";

const Card = ({ label, unidades, ...otherProps }) => {
  return (
    <ContainerCard {...otherProps}>
      <Title>{label}</Title>
      <Unidades>{unidades}</Unidades>
    </ContainerCard>
  );
};

export default Card;
