import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import styled from "styled-components";
import colors from "../colors";

const CustomDropdown = styled(Dropdown)`
  margin-left: 10px;
`;

const CustomDropdownToggle = styled(DropdownToggle)`
  border-radius: 12px;
  background-color: ${colors.secondary};
  border: none;
  color: ${colors.primary};
  padding: 6px 12px;
  min-width: 100px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function DropdownFilter({ filter }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CustomDropdown key={filter.id} toggle={() => setIsOpen(!isOpen)}>
      <CustomDropdownToggle caret>
        {filter.icon && <FontAwesomeIcon icon={filter.icon} />}
        {filter.title}
      </CustomDropdownToggle>
      <DropdownMenu className={isOpen && "show"}>
        {filter.options.map((option) => {
          return <DropdownItem key={option.id}>{option.name}</DropdownItem>;
        })}
      </DropdownMenu>
    </CustomDropdown>
  );
}
