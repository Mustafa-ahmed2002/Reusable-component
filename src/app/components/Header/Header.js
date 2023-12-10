"use client";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  margin: 0;
  ${(props) => props.brand}
`;

const ActionButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Header = ({ brand, onActionClick }) => {
  return (
    <HeaderWrapper>
      <Brand>{brand}</Brand>
      <ActionButton onClick={onActionClick}>Action</ActionButton>
    </HeaderWrapper>
  );
};

export default Header;
