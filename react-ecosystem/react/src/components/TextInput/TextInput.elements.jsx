import styled from 'styled-components';
import { TEXT_INPUT_STATES } from './TextInput';

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

export const InputLabel = styled.label``;

export const Input = styled.input`
    outline: none;

    border-width: 3px;
    border-radius: 8px;
    padding: 4px;
    font-size: 16px;

    border-color: ${(props)=> {
        switch(props.state){
            case TEXT_INPUT_STATES.DEFAULT:
                return 'black';
            case TEXT_INPUT_STATES.ERROR:
                return 'red';
            case TEXT_INPUT_STATES.SUCCESS:
                return 'green';
            default:
                return 'black';
        }
    }};

    color: ${(props)=> {
        switch(props.state){
            case TEXT_INPUT_STATES.DEFAULT:
                return 'black';
            case TEXT_INPUT_STATES.ERROR:
                return 'red';
            case TEXT_INPUT_STATES.SUCCESS:
                return 'green';
            default:
                return 'black';
        }
    }};

    font-weight: bold;
`;