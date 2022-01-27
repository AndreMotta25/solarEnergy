import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 250px;
  position: relative;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #a8a9ac;
    font-size: 18px;
    font-family: "Roboto Slab", serif;
    outline: none;
  }
  svg {
    position: absolute;
    top: 38px;
    right: 10px;
    z-index: 1;
  }
`;
export const Description = styled.label`
  font-size: 18px;
  font-family: "Roboto Slab", serif;
  margin-bottom: 10px;
  display: block;
`;
