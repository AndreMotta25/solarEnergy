import React, { useState, useEffect } from "react";
import { SubTitle, WrapperModify } from "./styles";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Wrapper from "../../components/Wrapper/Wrapper";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UnitRegistration = () => {
  const { state } = useLocation();
  const [nickName, setNickName] = useState("");
  const [place, setPlace] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [active, setActive] = useState(false);
  const [id, setId] = useState("");
  const [errors, setErros] = useState({});
  const navigate = useNavigate();

  // assign the unit data in the form for the update
  useEffect(() => {
    if (state) {
      setNickName(state.apelido);
      setPlace(state.local);
      setBrand(state.marca);
      setModel(state.modelo);
      setActive(state.ativo);
      setId(state.id);
    }
  }, [state]);
  // this function does the work of some crud functions
  function crud(type, { id = "", obj }) {
    fetch(`http://localhost:3333/unidades/${id}`, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }
  function validateData(event) {
    event.preventDefault();
    let errors = {};
    const arrayStates = [nickName, place, brand, model];
    const arrayStatesString = ["Apelido", "Local", "Marca", "Modelo"];
    // structure made to save some if`s
    arrayStates.forEach((state, indice) => {
      if (!state) {
        let prop = arrayStatesString[indice];
        errors[prop] = `${arrayStatesString[indice]} é obrigatorio`;
      }
    });
    setErros(errors);
    // if the data is valid
    if (Object.getOwnPropertyNames(errors).length <= 0) {
      // update the unit
      if (state) {
        toast("Atualizando", { autoClose: 1500 });
        crud("PUT", {
          id: id,
          obj: {
            apelido: nickName,
            local: place,
            marca: brand,
            modelo: model,
            ativo: active,
          },
        });
        navigate("/units");
      }
      // make a new unit
      else {
        toast("Unidade Criada com sucesso", { autoClose: 1500 });
        crud("POST", {
          obj: {
            apelido: nickName,
            local: place,
            marca: brand,
            modelo: model,
            ativo: active,
          },
        });
        navigate("/units");
      }
    }
  }
  return (
    <>
      <Menu></Menu>

      <Wrapper>
        <Title title="Unidades" />
        <WrapperModify>
          {(state && <SubTitle>Alteração de Unidade Geradora</SubTitle>) || (
            <SubTitle>Criação de Unidade Geradora</SubTitle>
          )}
          {/* validar os dados aqui depois */}
          <Form width={"50%"} onSubmit={validateData}>
            <Input
              label="Apelido"
              borderRadius={true}
              width={"218px"}
              placeholder="Painel 1"
              value={nickName}
              onChange={(event) => {
                setNickName(event.target.value);
              }}
              error={errors.Apelido}
            />
            <Input
              label="Local"
              borderRadius={true}
              placeholder="Endereço"
              value={place}
              onChange={(event) => {
                setPlace(event.target.value);
              }}
              error={errors.Local}
            />
            <Input
              label="Marca"
              borderRadius={true}
              placeholder="Resun"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
              error={errors.Marca}
            />
            <Input
              label="Modelo"
              borderRadius={true}
              placeholder="155w"
              value={model}
              onChange={(event) => {
                setModel(event.target.value);
              }}
              error={errors.Modelo}
            />
            <Checkbox
              label="Ativo"
              checked={active}
              onChange={(event) => {
                setActive((active) => !active);
              }}
            />
            <Button>Salvar</Button>
          </Form>
        </WrapperModify>
      </Wrapper>
    </>
  );
};

export default UnitRegistration;
