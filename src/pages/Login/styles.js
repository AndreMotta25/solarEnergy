import styled from "styled-components";
import img from "../../assets/loginBackground.png";

export const Photo = styled.div`
  background: url(${img}) no-repeat left center;
  background-size: contain;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  align-self: flex-start;
  left: 0;

  @media screen and (max-width: 1200px) {
    background-size: cover;
    width: 100%;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  position: relative;
  justify-content: flex-end;
  font-family: "Roboto Slab", serif;
  background-color: #fbf4f4;
  z-index: 2;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    h2 {
      color: white;
    }
    input {
      border-color: white;
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  background-color: #4cbc9a;
  max-width: 518px;
  margin: 0 auto;
  border: none;
  outline: none;
  border-radius: 10px;
  color: white;
  padding: 20px 0;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  font-family: "Roboto Slab", serif;
  &:hover {
    background-color: #40e8b5;
    color: #374557;
  }
`;

export const Title = styled.h2`
  font-size: 24px;

  color: #374557;
  text-align: center;
`;

export const LogoContainer = styled.div`
  max-width: 309px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 100%;
  display: block;
`;
