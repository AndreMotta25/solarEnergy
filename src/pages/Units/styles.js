import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto 70px auto;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 30%);

  @media screen and (max-width: 600px) {
    border: none;
    tr {
      margin-bottom: 10px;
      display: block;
      border: none;
    }
    tr:nth-child(odd) {
      background-color: #e8e8e8;
    }
    td {
      display: block;
      position: relative;
    }
    td::before {
      content: attr(data-title);
      position: absolute;
      right: 0;
      display: block;
      font-weight: bold;
      padding-right: 10px;
    }
    thead {
      display: none;
    }
    button {
      width: 100%;
    }
  }
`;

export const Header = styled.thead`
  border-bottom: 1px solid #dbdde0;
  td {
    background-color: #e8e8e8;
    padding: 15px 10px;
    font-weight: bold;
  }
`;
export const Line = styled.tr`
  border-bottom: 1px solid #dbdde0;
  border-top: 1px solid #dbdde0;
  
`;
export const ItemLine = styled.td`
  font-family: "Mulish", sans-serif;
  font-size: 16px;
  vertical-align: middle;
  padding: 20px 10px;
`;
export const Tbody = styled.tbody``;

export const Buttons = styled.button`
  background-color: ${({ backGroundColor }) => {
    return backGroundColor;
  }};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 15%);

  &:hover {
    background-color: rgba(0, 0, 0, 75%);
  }
`;
export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: flex-end;
  margin: 0 auto;
`;
