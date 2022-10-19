import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Select = styled.div`
    position: relative;
    width: 4rem;
`;

export const SelectText = styled.div`

`;

export const OptionWrapper = styled.div`
    top: calc(100% + 10px);
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.black};
`;

export const Option = styled.div`
    cursor: pointer;
    width: 100%;
`;

export const Label = styled.p`
    font-size: ${({theme}) => theme.fontSizes.p};
    margin-right: ${({theme}) => theme.spacing.default}rem;
`;