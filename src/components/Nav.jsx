import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Nav, NavItem, NavLink } from "reactstrap";
import colors from "../colors";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TotalNav = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CustomNav = styled(Nav)`
  margin-bottom: 15px;
  display: flex;
  font-size: 12px;
`;

const CustomNavLink = styled(NavLink)`
  color: ${(props) => (props.active ? colors.dark : colors.lighGrey)};

  &:hover {
    color: ${colors.primary};
  }
`;

const InputStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: none;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  color: ${colors.lighGrey};
  display: inline-block;

  &:focus {
    outline: none;
  }
`;

const MiniInput = styled(Input)`
  border: none;
  display: inline-block;
  font-size: 12px;

  &::placeholder {
    color: ${colors.lighGrey};
  }
`;

export default function NavigationBar() {
  return (
    <TotalNav>
      <div>
        <CustomNav>
          <NavItem>
            <CustomNavLink active href="#">
              All plans
            </CustomNavLink>
          </NavItem>
          <NavItem>
            <CustomNavLink href="#">Recently sent</CustomNavLink>
          </NavItem>
          <NavItem>
            <CustomNavLink href="#">Previously sent</CustomNavLink>
          </NavItem>
          <NavItem>
            <CustomNavLink href="#">Last approved</CustomNavLink>
          </NavItem>
          <NavItem>
            <CustomNavLink href="#">Finish soon</CustomNavLink>
          </NavItem>
          <NavItem>
            <CustomNavLink href="#">Group plans</CustomNavLink>
          </NavItem>
        </CustomNav>
      </div>
      <InputStyle className="text-right">
        <MiniInput type="search" placeholder="Search" />
        <Icon icon={faSearch} />
      </InputStyle>
    </TotalNav>
  );
}
