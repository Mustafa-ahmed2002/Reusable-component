"use client";
import React from "react";
import styled from "styled-components";
const CustomizedInput = styled.input`
  ${(props) => props.placeholder}
  ${(props) => props.value}
`;
const Input = ({ placeholder, value }) => {
  return (
    <CustomizedInput
      placeholder={placeholder}
      value={value}
      onChange={(e) => console.log(e.target.value)}
    ></CustomizedInput>
  );
};

export default Input;
