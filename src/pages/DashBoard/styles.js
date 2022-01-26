import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  flex: 1 1 auto;
  justify-content: center;
  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export const WrapperPanel = styled.div`
  width: 80%;
  max-width: 860px;
  margin: 50px auto;
`;
export const Panel = styled.img`
  width: 100%;
`;
