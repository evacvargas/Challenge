import React from "react";
import Filters from "../components/Filters";
import Menu from "../components/Menu";
import Table from "../components/Table";
import styled from "styled-components";
import NavigationBar from "../components/Nav";
import FloatingButton from "../components/FloatingButton";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Body = styled.div`
  height: 100vh;
  width: 85%;
  padding: 15px;
  overflow-y: auto;
`;

export default function Home() {
  return (
    <Wrapper>
      <Menu />
      <Body>
        <NavigationBar />
        <Filters />
        <Table />
        <FloatingButton />
      </Body>
    </Wrapper>
  );
}
