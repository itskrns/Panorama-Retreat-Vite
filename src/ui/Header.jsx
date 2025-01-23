import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.div`
  padding: 1rem 2rem;
  background-color: var(--color-grey-0);
  border-bottom: solid 2px var(--color-grey-100);
  display: flex;
  gap: 0.5rem;
  justify-content: end;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}
