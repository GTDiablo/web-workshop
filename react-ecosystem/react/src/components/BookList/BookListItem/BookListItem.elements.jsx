import styled, { css } from "styled-components";

export const BookListItemWrapper = styled.div`
    border: 0.2rem solid ${props => props.theme.colors.primary};
    padding: ${props => props.theme.spacing.default}rem;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ItemText = styled.p`
    font-size: ${props => props.theme.fontSizes.p};
    color: ${props => props.theme.colors.black};
    text-decoration: none !important;
`;

export const ItemTitle = styled(ItemText)`
    font-weight: bold;
    margin-right: ${props => props.theme.spacing.default}rem;
`;

export const ItemAuthor = styled(ItemText)`
    font-style: italic;
`;

export const ItemLeftContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ItemDate = styled(ItemText)`
    font-weight: bold;
`;


