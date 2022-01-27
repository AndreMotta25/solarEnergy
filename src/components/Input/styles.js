import styled from "styled-components";

export const InputText = styled.input`
  width: 100%;
  border-radius: ${({ borderRadius }) => (borderRadius ? "4px" : "10px")};
  border: 1px solid ${({ error }) => (error ? "red" : "#a8a9ac")};
  padding: 15px;
  padding-left: ${({ img }) => img};
  outline: none;
`;

export const ContainerInput = styled.div`
  max-width: ${({ width }) => (width ? width : "518px")};
  width: 100%;
  margin: 0 auto;
  position: relative;

  svg {
    position: absolute;
    left: 10px;
    color: grey;
    top: 10px;
  }
  * {
    font-family: "Roboto Slab", serif;
  }
`;

export const Description = styled.label`
  font-size: 18px;
  display: block;
  margin-bottom: 10px;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
`;
