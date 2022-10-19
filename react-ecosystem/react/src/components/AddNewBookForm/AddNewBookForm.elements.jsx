import styled from "styled-components";
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;
`;

export const Label = styled.label`
    font-weight: bold;
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fontSizes.label};
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

// const InputMixin = css``;

export const Input = styled.input`
    border: 0.2rem solid ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fontSizes.label};
    padding: ${({theme}) => theme.spacing.default}rem;
    border-radius: 0.8rem;
`;

export const ErrorMessage = styled.span`
    display: block;
    color: ${({theme}) => theme.colors.danger};
    font-size: ${({theme}) => theme.fontSizes.small};
`;

export const SubmitButton = styled.button.attrs({
    submit: true,
})`
    font-size: ${({theme}) => theme.fontSizes.small};
    border-radius: 0.8rem;
    color: ${({theme}) => theme.colors.black};
    padding: ${({theme}) => theme.spacing.default}rem;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`