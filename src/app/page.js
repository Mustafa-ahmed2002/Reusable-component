"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Container from "./components/Container/Container";
import ButtonComponent from "./components/Button/Button";
import { Smokum } from "next/font/google";
import IconButton from "./components/iconButton/iconButton";
import Text from "./components/Text/Text";
import Space from "./components/Space/Space";
import Input from "./components/Input/Input";
import Modal from "./components/Modal/Modal";
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import Tag from "./components/Tag/Tag";
export default function Home() {
  const columns = ["Name", "Age", "City"];
  const data = [
    { Name: "mustafa", Age: 30, City: "New York" },
    { Name: "ali", Age: 25, City: "bahamas" },
    { Name: "hamza", Age: 35, City: "OHIO" },
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log("closing...");
  };
  const handleActionClick = () => {
    console.log("Action clicked!");
  };
  return (
    <main>
      <Header brand={"Reason"} onActionClick={handleActionClick} />
      <Container width={"1000px"}>
        <ButtonComponent type={"primary"}>Primary</ButtonComponent>
        <ButtonComponent type={"secondary"}>Secondary</ButtonComponent>
        <ButtonComponent type={"default"}>Default</ButtonComponent>
        <IconButton type={"primary"}></IconButton>
        <IconButton type={"secondary"}></IconButton>
        <IconButton type={"default"}></IconButton>
        <Text size={"50px"} bold={"true"} color={"red"}>
          Text
        </Text>
        <Space height={"50px"} width={"50px"}></Space>
        <Input placeholder={"heelo"} value={"dd"}></Input>
        <Space height={"20px"} />
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h2>This is my modal</h2>
          <p>Modal content here.</p>
        </Modal>
        <Table columns={columns} data={data}></Table>
        <Tag color={"red"}>summer</Tag>
        <Tag>winter</Tag>
        <Tag color={"violet"}>autumn</Tag>
      </Container>
    </main>
  );
}
