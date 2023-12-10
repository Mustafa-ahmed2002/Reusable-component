"use client";
import React from "react";
import styled from "styled-components";

const CustomizedSpace = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const Space = ({ height, width }) => {
  return <CustomizedSpace height={height} width={width}></CustomizedSpace>;
};

export default Space;
