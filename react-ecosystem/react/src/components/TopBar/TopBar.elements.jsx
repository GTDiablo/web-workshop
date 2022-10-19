import styled from "styled-components";

export const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    padding: ${({theme}) => theme.spacing.default}rem;
    background-color: ${({theme}) => theme.colors.primaryLight};
    border-bottom: 3px solid ${({theme}) => theme.colors.black};
`;