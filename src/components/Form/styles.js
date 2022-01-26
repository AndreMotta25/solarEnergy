import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  max-width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 20px;
  position: relative;
  z-index: 9998;
`;
