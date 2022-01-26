import React, { useState } from "react";
import {
  ContainerMenu,
  ItemMenu,
  Icone,
  MenuNavigation,
  Navigation,
  Logo,
  BtnMenu,
} from "./styles";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiPulse } from "react-icons/bi";
import url from "../../assets/logo_menu.png";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuAtivo, setMenuAtivo] = useState("");
  return (
    <>
      <ContainerMenu>
        <BtnMenu
          className="btn"
          onClick={() => {
            setMenuAtivo((ativo) => (ativo === "ativo" ? "" : "ativo"));
          }}
        >
          Menu
        </BtnMenu>
        <Navigation className={menuAtivo}>
          <Logo src={url} />
          <MenuNavigation>
            <ItemMenu>
              <Link to="/dashboard">
                <Icone>
                  <MdSpaceDashboard color="#A098AE" size={"24px"} />
                </Icone>
                DashBoard
              </Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/unidades">
                <Icone>
                  <BiPulse size={"24px"} color="#A098AE" />
                </Icone>
                Unidade consumidora
              </Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/">
                <Icone>
                  <IoMdSettings color="#A098AE" size={"24px"} />
                </Icone>
                Cadastro de energia gerada
              </Link>
            </ItemMenu>
          </MenuNavigation>
        </Navigation>
      </ContainerMenu>
    </>
  );
};

export default Menu;
