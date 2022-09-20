import styled from 'styled-components';

const StyledCardBody = styled.div`
    padding: 32px;
    border: 1px solid ${(props) =>props.theme.textColor};
    border-radius: 16px;
    margin: 50px;
    background-color: ${(props) => props.theme.backgroundColor};
    /* background-color: red; */
`;

const StyledCardText = styled.p`
    font-size: 18px;
    color: ${(props) => props.theme.textColor};
`


const Card = ({children, isText = false}) => {
    return (
    <StyledCardBody>
        { isText && (
            <StyledCardText>
                {children}
            </StyledCardText>
        )}
        {!isText && children}
    </StyledCardBody>
    )
}

export default Card;