import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faBookOpen,
  faCalendar,
  faCalendarDay,
  faCheckCircle,
  faClock,
  faCog,
  faCreditCard,
  faDollarSign,
  faFile,
  faGlobeAmericas,
  faLanguage,
  faQuestionCircle,
  faStar,
  faThLarge,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, NavItem, NavLink } from "reactstrap";
import colors from "../colors";
import logo from "../assets/Logotipo.jpg";

const Logo = styled.img`
  margin: 0;
  padding: 0;
  width: 100px;
  margin-left: 15%;
  margin-bottom: 15px;
`;

const CustomNav = styled(Nav)`
  margin-top: -10%;
  height: 100vh;
  justify-content: space-around;
`;

const MenuVertical = styled.div`
  box-shadow: -30px 1px 25px -20px ${colors.shadow} inset;
  -webkit-box-shadow: -30px 1px 25px -20px ${colors.shadow} inset;
  -moz-box-shadow: -30px 1px 25px -20px ${colors.shadow} inset;
  width: 15%;
  padding: 15px;
`;

const CustomNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${colors.grey};
  font-size: 12px;

  &:hover {
    color: ${colors.primary};
  }

  svg {
    margin-right: 10px;
  }
`;

const SettingsDropdownMenu = styled.div`
  background-color: white;
  box-shadow: 1px 1px 20px ${colors.shadow};
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  position: absolute;
  right: -135px;
  top: -180px;
  ul {
    padding-left: 0;
    list-style: none;
  }

  li {
    padding: 5px 0;
    font-size: 12px;
    color: ${colors.dark};
    svg {
      margin-right: 10px;
    }
  }
`;
const CustomAvatar = styled.div`
  display: flex;
  justify-content: strech;
  margin-left: 30px;
`;

const Avatar = styled.div`
  background-color: ${colors.primary};
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  margin-left: -15%;
  font-size: 10px;

  bottom: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  color: ${colors.grey};
  font-size: 12px;
  margin-left: 10px;
`;

const NavItemCenter = styled.div`
  font-size: 14px;
  color: ${colors.grey};
  border: dashed 2px #b2bac5;
  border-top-right-radius: 12px 12px;
  border-bottom-right-radius: 12px 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: -25px;
  margin-right: 25px;
  padding: 5px;

  &:hover {
    background-color: ${colors.dark};
    color: white;
  }
`;

const CustomNavLinkCenter = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  justify-content: center;
  font-size: 12px;

  svg {
    margin-right: 10px;
  }
`;

export default function Menu() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <MenuVertical>
      <CustomNav vertical>
        <Logo src={logo} alt="Logo" />
        <NavItem>
          <CustomNavLink href="#">
            <FontAwesomeIcon icon={faClock} />
            Dashboard
          </CustomNavLink>
        </NavItem>
        <NavItem>
          <CustomNavLink href="#">
            <FontAwesomeIcon icon={faCalendar} />
            Program
          </CustomNavLink>
        </NavItem>
        <NavItem>
          <CustomNavLink href="#">
            <FontAwesomeIcon icon={faBookOpen} />
            Workspace
          </CustomNavLink>
        </NavItem>
        <NavItem>
          <CustomNavLink href="#">
            <FontAwesomeIcon icon={faBookmark} />
            Plans
          </CustomNavLink>
        </NavItem>
        <NavItem>
          <CustomNavLink href="#">
            <FontAwesomeIcon icon={faCreditCard} />
            Payments
          </CustomNavLink>
        </NavItem>
        <NavItem>
          <CustomNavLink href="#">
            <FontAwesomeIcon icon={faFile} />
            Payslips
          </CustomNavLink>
        </NavItem>

        <NavItemCenter>
          <CustomNavLinkCenter href="#">
            <FontAwesomeIcon icon={faTv} />
            Live prep
          </CustomNavLinkCenter>
        </NavItemCenter>
        <NavItemCenter>
          <CustomNavLinkCenter href="#">
            <FontAwesomeIcon icon={faStar} />
            Counseling
          </CustomNavLinkCenter>
        </NavItemCenter>
        <NavItemCenter>
          <CustomNavLinkCenter href="#">
            <FontAwesomeIcon icon={faCheckCircle} />
            Self prep
          </CustomNavLinkCenter>
        </NavItemCenter>

        <NavItem>
          <CustomNavLink href="#">
            <FontAwesomeIcon icon={faQuestionCircle} />
            Help
          </CustomNavLink>
        </NavItem>
        <NavItem style={{ position: "relative" }}>
          <CustomNavLink
            href="#"
            onMouseEnter={() => setShowDropdown(!showDropdown)}
            onMouseLeave={() => setShowDropdown(!showDropdown)}
          >
            <FontAwesomeIcon icon={faCog} />
            Settings
          </CustomNavLink>
          {showDropdown && (
            <SettingsDropdownMenu>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faDollarSign} />
                  Services
                </li>
                <li>
                  <FontAwesomeIcon icon={faBookOpen} />
                  Topics
                </li>
                <li>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  Activities
                </li>
                <li>
                  <FontAwesomeIcon icon={faThLarge} />
                  Templates
                </li>
                <hr />
                <li>
                  <FontAwesomeIcon icon={faGlobeAmericas} />
                  Countries
                </li>
                <li>
                  <FontAwesomeIcon icon={faLanguage} />
                  Translations
                </li>
              </ul>
            </SettingsDropdownMenu>
          )}
        </NavItem>
        <CustomAvatar>
          <Avatar>EV</Avatar>
          <Name>Eva</Name>
        </CustomAvatar>
      </CustomNav>
    </MenuVertical>
  );
}
