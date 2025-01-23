import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  gap: 3rem;
  display: flex;
  grid-row: 1 / -1;
  padding: 2rem 2.5rem;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border-right: solid 2px var(--color-grey-100);
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
