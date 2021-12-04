import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  Table,
  DropdownToggle,
  Dropdown,
} from "reactstrap";
import styled from "styled-components";
import colors from "../colors";
import { getDataFromApi } from "../services/services";

const CustomTable = styled(Table)`
  border-color: transparent;
`;

const Avatar = styled.img`
  border-radius: 10px;
  width: 40px;
  margin-right: 15px;
`;

const TableCell = styled.td`
  font-size: 12px;
  color: ${colors.dark};
  vertical-align: right;
  padding: 0;

  svg {
    margin-left: 10px;
  }
`;

const Status = styled.div`
  display: inline-block;
  padding: 0;
`;

const StatusDot = styled.div`
  background-color: ${(props) => props.color};
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-left: 10px;
  display: inline-block;
`;

const CustomDropdownToggle = styled(DropdownToggle)`
  border-color: ${colors.lighGrey};
  border-radius: 12px;
  color: ${colors.lighGrey};
`;

const CustomButton = styled(Button)`
  border-color: ${colors.lighGrey};
  border-radius: 15px;
  color: ${colors.lighGrey};
  font-size: 12px;
`;

const statuses = [
  {
    name: "Pending",
    id: "pending",
    color: "red",
    action: "Send reminder",
  },
  {
    name: "In progress",
    id: "progress",
    color: "yellow",
    action: "View plan",
  },
  {
    name: "Completed",
    id: "completed",
    color: "green",
    action: "View plan",
  },
  {
    name: "Draft",
    id: "draft",
    color: "grey",
    action: "Edit plan",
  },
];

const usersData = [
  {
    amount: "$4000",
    topics: "SAT",
    service: "Counseling",
    date: "1 week ago",
  },
  {
    amount: "$4000",
    topics: "TOEFL",
    service: "September 2000",
    date: "1 week ago",
  },
  {
    amount: "$4000",
    topics: "TOEFL",
    service: "September 2000",
    date: "1 week ago",
  },
  {
    amount: "$4000",
    topics: "SAT",
    service: "September 2000",
    date: "1 week ago",
  },
];

export default function DataTable() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await getDataFromApi();
    const data = response.data.data.map((item) => {
      return {
        ...item,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        userData: usersData[Math.floor(Math.random() * usersData.length)],
      };
    });

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <CustomTable>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <TableCell>
                <Avatar src={user.avatar} alt={user.first_name} />
                {user.first_name} {user.last_name}
                <FontAwesomeIcon icon={faStar} color={colors.lightBlue} />
              </TableCell>
              <TableCell>{user.userData.topics}</TableCell>
              <TableCell>{user.userData.service}</TableCell>
              <TableCell>{user.userData.amount}</TableCell>
              <TableCell>{user.userData.date}</TableCell>
              <TableCell className="text-right mr-3">
                <Status>{user.status.name}</Status>
                <StatusDot color={user.status.color} />
              </TableCell>

              <TableCell className="text-right">
                <ButtonDropdown toggle={function noRefCheck() {}}>
                  <CustomButton outline> {user.status.action} </CustomButton>
                  <CustomDropdownToggle outline split />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </TableCell>
            </tr>
          );
        })}
      </tbody>
    </CustomTable>
  );
}
