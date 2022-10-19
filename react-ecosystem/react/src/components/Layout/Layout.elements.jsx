import styled from "styled-components";

export const LayoutOuterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`

export const LayoutWrapper = styled.div`
    display: flex;
    align-items: stretch;
    overflow: hidden;
`;

export const LayoutContent = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 2rem;
`;

export const LayoutUsername = styled.p`
    font-size: ${({theme}) => theme.fontSizes.p};
`;