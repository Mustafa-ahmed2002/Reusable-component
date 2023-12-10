import React, { children } from "react";
import styled from "styled-components";
const ContainerComponent = styled.div`
  width: ${(props) => props.width};
  margin: 0 auto;
`;
const Container = ({ children, width }) => {
  return <ContainerComponent width={width}> {children}</ContainerComponent>;
};

export default Container;
