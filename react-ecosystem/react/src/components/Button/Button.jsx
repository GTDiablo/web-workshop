import styles from './Button.module.css';
import styled from 'styled-components'
import { useState } from 'react';

const StyledButton = styled.button`
    width: 400px;
    height: 50px;
    font-size: 30px;
    background-color: yellow;
    color: ${(props) => {
        if(props.small){
            return 'purple'
        }
        return props.fontColor;
    }};
`;

const Button = (props) => {
    const [fontColor, setFontColor] = useState('red');

    const changeColor = () => {
        console.log('Valami');
        setFontColor('red');
    }

    return (
        <div>
            <StyledButton small fontColor={fontColor} onClick={changeColor}>
                {props.title} {fontColor}
            </StyledButton>
            <StyledButton small fontColor={fontColor} onClick={changeColor} disabled={props.disabled}>
                {props.title} {fontColor}
            </StyledButton>
        </div>
    )
}

export default Button;