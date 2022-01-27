import React from "react";
import { Container, LabelDescription, CheckboxInput } from "./styles";

const Checkbox = ({ label, ...otherProps }) => {
  return (
    <Container>
      <CheckboxInput id="check" type="checkbox" {...otherProps} />
      <LabelDescription htmlFor="check">{label}</LabelDescription>
    </Container>
  );
};

export default Checkbox;
