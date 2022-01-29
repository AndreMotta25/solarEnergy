import styled from "styled-components";
// import { ContainerDefault } from "../../components/Wrapper/styles";

export const SubTitle = styled.h2`
  color: #374557;
  font-size: 28px;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin: 50px 0;
`;

export const WrapperModify = styled.div`
  padding-left: 60px;
  .wrapperInput {
    margin: 0;
  }

  @media screen and (max-width: 830px) {
    & .form {
      max-width: 100% !important;
    }
    padding-right: 20px;
    padding-left: 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 30px;
    h2 {
      text-align: center;
      margin-top: 10px;
    }
  }
`;
