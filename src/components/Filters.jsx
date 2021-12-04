import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  Button,
  ButtonDropdown,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import styled from "styled-components";
import DropdownFilter from "./DropdownFilter";

const Wrapper = styled.div`
  display: flex;
  margin-right: 90%;
`;

const CustomButton = styled(Button)`
  border: none;
  font-size: 10px;
  margin-left: 60%;
`;

const CustomDropdownToggle = styled(DropdownToggle)`
  border: none;
`;

const filters = [
  {
    id: 1,
    title: "Service",
    options: [
      {
        name: "Service 1",
        id: "service-1",
      },
      {
        name: "Service 2",
        id: "service-2",
      },
    ],
  },
  {
    id: 2,
    title: "Topics",
    options: [
      {
        name: "Topic 1",
        id: "topic-1",
      },
      {
        name: "Topic 2",
        id: "topic-2",
      },
    ],
  },
  {
    id: 3,
    title: "Test date",
    options: [
      {
        name: "Test date 1",
        id: "test-1",
      },
      {
        name: "Test date 2",
        id: "test-2",
      },
    ],
  },
  {
    id: 4,
    title: "Status",
    options: [
      {
        name: "Status 1",
        id: "status-1",
      },
      {
        name: "Status 2",
        id: "status-2",
      },
    ],
  },
  {
    id: 5,
    title: "Filters",
    icon: faSlidersH,
    options: [
      {
        name: "Filter 1",
        id: "filter-1",
      },
      {
        name: "Filter 2",
        id: "filter-2",
      },
    ],
  },
];

export default function Filters() {
  return (
    <Wrapper>
      {filters.map((filter) => {
        return <DropdownFilter style={{ width: "5%" }} filter={filter} />;
      })}

      <ButtonDropdown
        style={{ width: "100%" }}
        toggle={function noRefCheck() {}}
      >
        <CustomButton outline> Columns </CustomButton>
        <CustomDropdownToggle outline split />

        <CustomButton outline> GROUP </CustomButton>
        <CustomDropdownToggle outline split />

        <CustomButton outline> ORDERS </CustomButton>
        <CustomDropdownToggle outline split />
      </ButtonDropdown>
    </Wrapper>
  );
}
