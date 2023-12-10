"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import leaficon from "./leaf-icon.svg";
const IconBtn = styled.button`
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  }

  background: ${(props) =>
    props.type === "secondary" || props.type === "default"
      ? "transparent"
      : "pink"};
  border: ${(props) => (props.type === "secondary" ? "1px solid #000" : "0")};
  margin-left: 100px;
  border-radius: 50%;
  width: ${(props) =>
    props.size === "sm" ? "50px" : props.size === "md" ? "60px" : "65px"};
  height: ${(props) =>
    props.size === "sm" ? "50px" : props.size === "md" ? "60px" : "65px"};
`;
const IconButton = ({ type, size }) => {
  return (
    <IconBtn type={type} size={size}>
      <Image alt="ii" src={leaficon} width={25} height={25}></Image>
    </IconBtn>
  );
};

export default IconButton;
