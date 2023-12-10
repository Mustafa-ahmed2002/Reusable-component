"use client";
import React, { useState } from "react";
import styled from "styled-components";
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
`;
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <ModalContainer>
        {children}
        <button onClick={onClose}>Close Modal</button>
      </ModalContainer>
    </Overlay>
  );
};
export default Modal;
