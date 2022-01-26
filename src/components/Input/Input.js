import React from "react";
// import { Container } from "../../pages/Login/styles";
import { InputText, ContainerInput, Description, Error } from "./styles";

const Input = ({ Img, label, width, error, ...otherProps }) => {
  return (
    <ContainerInput width={width} className="wrapperInput">
      {(Img && <Img size={`30px`} />) || <Description>{label}</Description>}
      <InputText
        error={error}
        img={Img ? `50px` : `15px`}
        type="text"
        {...otherProps}
      />
      <Error>{error}</Error>
    </ContainerInput>
  );
};

export default Input;
