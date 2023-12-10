"use client";
import React, { Children } from "react";
import styled from "styled-components";
const ButtonComponent = styled.button`
  width: ${(props) =>
    props.size === "sm"
      ? "90px"
      : props.size === "md" || props.type === "secondary"
      ? "120px"
      : "140px"};
  height: ${(props) =>
    props.size === "sm" || props.type === "default"
      ? "40px"
      : props.size === "md" || props.type === "secondary"
      ? "50px"
      : "60px"};
  border-radius: 8px;
  border: ${(props) =>
    props.type === "default" ? "1px solid blue" : "1px solid #000"};
  background: ${(props) =>
    props.type === "primary"
      ? "red"
      : props.type === "secondary"
      ? "white"
      : props.type === "default"
      ? "white"
      : "red"};
  color: ${(props) =>
    props.type === "primary"
      ? "white"
      : props.type === "secondary"
      ? "black"
      : props.type === "default"
      ? "black"
      : "white"};
  font-size: ${(props) =>
    props.size === "sm"
      ? "15px"
      : props.size === "md" || props.type === "default"
      ? "18px"
      : "20px"};
  cursor: pointer;
`;
const Button = ({ children, type, size }) => {
  return (
    <ButtonComponent size={size} type={type}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
