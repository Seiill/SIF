import styled  from "styled-components";

export const Main = styled.main`
position: relative;
max-width: 1280px;

margin: auto;
background-color: ${({ theme }) => theme.bg};
z-index: 1;
`
