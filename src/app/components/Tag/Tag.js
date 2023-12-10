"use client";
import React from "react";
import styled from "styled-components";
const TagWrapper = styled.span`
  display: inline-block;
  border-radius: 8px;
  background-color: ${(props) => props.color || "#007bff"};
  color: #fff;
  cursor: pointer;
  padding: 8px;
  margin-left: 10px;
`;
const Tag = ({ color, children }) => {
  return <TagWrapper color={color}>{children}</TagWrapper>;
};

export default Tag;
