import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Menu from "../../components/Menu/Menu";
import Title from "../../components/Title/Title";
const GenericPage = ({ children, title }) => {
  return (
    <>
      <Menu></Menu>
      <Wrapper>
        <Title title={title} />
        {children}
      </Wrapper>
    </>
  );
};

export default GenericPage;
