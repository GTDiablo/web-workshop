import styled from "styled-components";

export const StyledField = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const StyledText = styled.p`
    font-size: ${props => props.theme.fontSizes.p};
    color:${props => props.theme.colors.black };
`;

export const StyledKey = styled(StyledText)`
    font-style: italic;
`;

export const StyledValue = styled(StyledText)`
    font-weight: bold;
`;

export const BookDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 0.2rem solid ${props => props.theme.colors.primary};
    padding: ${props => props.theme.spacing.default *2}rem;
    gap: 2rem;
`;