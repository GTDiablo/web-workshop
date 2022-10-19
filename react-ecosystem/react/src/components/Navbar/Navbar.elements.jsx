import styled from "styled-components";

export const NavbarContainer = styled.div`
    height: 100vh;
    width: ${({isOpen}) => isOpen ? '20rem' : '3rem'};
    background-color: ${({theme}) => theme.colors.navbarBackground};
    position: relative;
    border-right: 0.4rem solid ${({theme}) => theme.colors.primary};
    transition: 150ms all;
`;

export const NavbarList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: hidden;
    gap: ${({theme}) => `${0.5*theme.spacing.default}rem`};
`;

export const NavbarItem = styled.div`
    padding: ${({theme}) => {
        const space = theme.spacing.default
        return `${space}rem ${2*space}rem`;
    }};
    background-color: ${({theme, isActive}) => {
        if(isActive) {
            return theme.colors.primary;
        }
        return theme.colors.primaryLight
    }};
    cursor: pointer;
    color: ${({theme, isActive}) => {
        if(isActive) {
            return theme.colors.white;
        }
        return theme.colors.black;
    }};
    font-size: 1.5rem;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
        opacity: 0.7;
    }
`;

export const NavbarToggler = styled.span`
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid ${({theme}) => theme.colors.primary};
    right: 0px;
    transform: translateX(70%);
    top: 1.6rem;
    background-color: ${({theme}) => theme.colors.background};
    cursor: pointer;
`;