import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import colors from "../colors";

const Button = styled.div`
  background-color: ${colors.primary};
  color: white;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 25px;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.lighGrey};
    color: white;
  }
`;

export default function FloatingButton() {
  return (
    <Button>
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  );
}
