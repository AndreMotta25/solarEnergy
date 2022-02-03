import styled from "styled-components";
import backGround from "../../assets/notFound.png";

export const Wrapper = styled.div`
  width: 100%;
  background: url(${backGround}) no-repeat center center;
  background-size: 60%;
  min-height: 100vh;

  @media screen and (max-width: 500px) {
    background-size: 80%;
    background-position-x: top;
  }
`;
