"use client";
import React from "react";
import styled from "styled-components";
const CustimizedText = styled.p`
  font-size: ${(props) => (props.size ? props.size : "20px")};
  font-weight: ${(props) =>
    props.bold === "true" ? "bold" : props.bold === "false" ? "300" : "300"};
  color: ${(props) => (props.color ? props.color : "#000")};
`;
const Text = ({ children, size, bold, color }) => {
  return (
    <CustimizedText size={size} bold={bold} color={color}>
      {children}
    </CustimizedText>
  );
};

export default Text;
