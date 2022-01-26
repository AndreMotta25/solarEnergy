import React from "react";
import { FormContainer } from "./styles";

const Form = ({ children, onSubmit, width }) => {
  return (
    <FormContainer onSubmit={onSubmit} width={width} className="form">
      {children}
    </FormContainer>
  );
};

export default Form;
