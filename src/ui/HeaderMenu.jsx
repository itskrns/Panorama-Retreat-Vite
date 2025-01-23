import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router";
import styled from "styled-components";

import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import UserAvatar from "../features/authentication/UserAvatar";
import ToggleDarkMode from "./ToggleDarkMode";

const StyledMenu = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledMenu>
      <li>
        <UserAvatar />
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <ToggleDarkMode />
      </li>
      <li>
        <Logout />
      </li>
    </StyledMenu>
  );
}
