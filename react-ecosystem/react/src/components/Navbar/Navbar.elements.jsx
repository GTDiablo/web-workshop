import styled from "styled-components";

export const NavbarContainer = styled.div`
    height: 100vh;
    width: ${({isOpen}) => isOpen ? '20rem' : '3rem'};
    background-color: ${({theme}) => theme.colors.navbarBackground};
`;
export const NavbarList = styled.div``;
export const NavbarItem = styled.div``;