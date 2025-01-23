import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
  grid-template-columns: 25rem 1fr;
`;

const Main = styled.main`
  overflow: auto;
  padding: 4rem 4rem;
  background-color: var(--color-grey-50);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  gap: 2rem;
  display: flex;
  margin: 0 auto;
  max-width: 120rem;
  flex-direction: column;
`;

export default function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledLayout>
  );
}
