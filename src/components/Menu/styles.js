import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 100%;
  max-width: 345px;
  min-height: 100vh;
  /* position: absolute;
  top: 0;
  left: 0; */
  padding: 0px 45px;
  font-family: "Roboto Slab", serif;
  font-size: 18px;

  background-color: white;
  @media screen and (max-width: 960px) {
    max-width: 245px;
    padding: 0;
    /* border: 2px solid black; */
  }
  @media screen and (max-width: 800px) {
    max-width: 100%;
    height: 40px !important;
    min-height: 0;
    position: relative;
    display: flex;
    align-items: center;

    nav {
      position: absolute;
      top: 0;
      width: 50%;
      max-width: 250px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 50%);
      display: none;
      visibility: hidden;
      background-color: white;
      border-radius: 5px;
      padding: 10px;
      z-index: 9999;
      li {
        margin: 0 auto;
      }
    }
    nav.ativo {
      display: block;
      visibility: visible;
    }
  }
`;
export const Navigation = styled.nav``;

export const ItemMenu = styled.li`
  width: 100%;
  border-radius: 20px;
  display: flex;
  /* align-items: center; */
  /* padding: 16px 24px;
  position: relative;
  gap: 30px; */
  a {
    display: flex;
    padding: 16px 24px;
    position: relative;
    gap: 30px;
    width: 100%;
    border-radius: 20px;
    text-decoration: none;
    color: black;
    align-items: center;
  }

  &:hover {
    background-color: #4cbc9a;
    color: white;
    svg {
      fill: white;
      zoom: 120%;
    }
  }
`;
export const Icone = styled.div``;

export const MenuNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 960px) {
  }
`;
export const Logo = styled.img`
  display: block;
  margin: 0 auto;
`;

export const BtnMenu = styled.button`
  color: white;
  position: absolute;
  z-index: 99999;
  display: none;
  visibility: none;

  @media screen and (max-width: 800px) {
    display: block;
    visibility: visible;
    background-color: #4cbc9a;
    color: white;
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      background-color: #40e8b5;
      color: #374557;
    }
  }
`;
