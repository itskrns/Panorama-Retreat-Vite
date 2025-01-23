import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  color: var(--color-yellow-700);
  font-size: 1.2rem;
  flex-direction: column;
  text-align: center;
`;

const Img = styled.img`
  height: 10rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <span>
        <Img src="logo.png" alt="Logo" />
      </span>
      <b>Panorama Retreat</b>
    </StyledLogo>
  );
}

export default Logo;
