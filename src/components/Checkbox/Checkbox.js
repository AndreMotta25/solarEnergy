import React from "react";
import { Container, LabelDescription, CheckboxInput } from "./styles";

const Checkbox = ({ label, ...otherProps }) => {
  return (
    <Container>
      <CheckboxInput type="checkbox" {...otherProps} />
      <LabelDescription>{label}</LabelDescription>
    </Container>
  );
};

export default Checkbox;
