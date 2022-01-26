import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
import Button from "../../components/Button/Button";
import {
  Table,
  Header,
  Line,
  ItemLine,
  Tbody,
  Buttons,
  WrapperButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// units page
const Unidades = () => {
  const [units, setUnits] = useState([]);
  const history = useNavigate();

  // When an item is deleted, this state will be responsible for rendering the page
  const [idItem, setIdItem] = useState("");

  // redirect the page to a unit item update
  function redirectPage(unit) {
    history("/CadastroDeUnidades", { state: unit });
  }
  // read the database
  useEffect(() => {
    // force fetch to fetch data from the server and not from the cache
    let myHeaders = new Headers();
    myHeaders.append("pragma", "no-cache");
    myHeaders.append("cache-control", "no-cache");
    async function searchUnits() {
      const unitsArray = await (
        await fetch("http://localhost:3333/unidades", {
          method: "GET",
          headers: myHeaders,
        })
      ).json();
      setUnits(unitsArray);
    }
    searchUnits();
  }, [idItem]);

  // delete an item from the table
  function del(id) {
    toast("Apagando", { autoClose: 1500 });

    fetch(`http://localhost:3333/unidades/` + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIdItem(id);
  }

  return (
    <>
      <Menu></Menu>
      <Wrapper>
        <Title title="Unidades" />
        <Table>
          <Header>
            <Line>
              <ItemLine>ID</ItemLine>
              <ItemLine>Apelido</ItemLine>
              <ItemLine width={"27%"}>Local</ItemLine>
              <ItemLine>Marca</ItemLine>
              <ItemLine>Modelo</ItemLine>
              <ItemLine></ItemLine>
              <ItemLine></ItemLine>
            </Line>
          </Header>
          <Tbody>
            {units.map((unit) => (
              <Line key={unit.id}>
                <ItemLine data-title="ID">{unit.id}</ItemLine>
                <ItemLine data-title="Apelido">{unit.apelido}</ItemLine>
                <ItemLine data-title="Local">{unit.local}</ItemLine>
                <ItemLine data-title="Marca">{unit.marca}</ItemLine>
                <ItemLine data-title="Modelo">{unit.modelo}</ItemLine>
                <ItemLine>
                  <Buttons
                    backGroundColor="#8DB51B"
                    onClick={() => {
                      redirectPage(unit);
                    }}
                  >
                    Editar
                  </Buttons>
                </ItemLine>
                <ItemLine>
                  <Buttons
                    backGroundColor="#D82D56"
                    onClick={() => {
                      del(unit.id);
                    }}
                  >
                    Remover
                  </Buttons>
                </ItemLine>
              </Line>
            ))}
          </Tbody>
        </Table>
        <WrapperButton>
          <Button
            onClick={() => {
              redirectPage();
            }}
          >
            Nova Unidade
          </Button>
        </WrapperButton>
      </Wrapper>
    </>
  );
};

export default Unidades;
