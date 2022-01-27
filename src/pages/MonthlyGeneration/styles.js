import styled from "styled-components";
import { ContainerDefault } from "../../components/Wrapper/styles";
import { FormContainer } from "../../components/Form/styles";

export const Wrapper = styled(ContainerDefault)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* form {
    gap: 40px;
  } */
  .wrapperInput {
    margin: 0;
  }
`;
export const Form = styled(FormContainer)`
  gap: 40px;
  width: 80%;

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    border: 2px solid #a8a9ac;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    justify-content: space-around;
    div {
      max-width: 100%;
      width: 100%;
    }
    select {
      width: 100%;
    }
  }
`;
