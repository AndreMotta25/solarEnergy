import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { ContainerInput, Description } from "./styles";
import { MdDateRange } from "react-icons/md";

const InputDate = ({ label, selected, ...otherProps }) => {
  return (
    <ContainerInput>
      <Description htmlFor="date">{label}</Description>
      <DatePicker
        selected={selected}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        id="date"
        {...otherProps}
      />
      <MdDateRange size={`25px`} />
    </ContainerInput>
  );
};

export default InputDate;
