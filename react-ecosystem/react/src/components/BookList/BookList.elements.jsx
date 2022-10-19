import styled from "styled-components";

export const BookListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${(props) => props.theme.spacing.default * 2}rem;
`;

export const BookListTitle = styled.h1`
    font-size: ${props => props.theme.fontSizes.h1};
    color: ${props => props.theme.colors.black};
    margin-bottom: ${props => props.theme.spacing.default * 6}rem;
`;