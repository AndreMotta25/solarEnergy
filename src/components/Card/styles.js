import styled from "styled-components";

export const ContainerCard = styled.div`
  /* max-width: 258px; */
  ${({ large }) => (large ? "min-width:258px;" : "max-width: 258px;")}
  width: 100%;
  height: 134px;
  border: 1px solid #dfe0eb;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-family: "Roboto Slab", serif;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  &:hover * {
    border-color: #3751ff;
    color: #3751ff !important;
  }
  &:hover {
    border-color: #3751ff;
    /* zoom: 1.1; */
  }
  @media screen and (max-width: 800px) {
    flex: 1 1 auto;
    max-width: 100%;
  }
`;
export const Title = styled.h3`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #9fa2b4;
`;
export const Unidades = styled.span`
  font-size: 40px;
  font-family: "Mulish", sans-serif;
  font-weight: bold;
`;
