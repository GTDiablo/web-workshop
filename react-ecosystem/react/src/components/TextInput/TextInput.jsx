import { memo } from "react";
import { InputWrapper, InputLabel, Input } from "./TextInput.elements";

/**
 * Props:
 * Value: string R
 * Label: string R
 * onTextInput: callback(string) R
 * state: default | error | success R
 * password: boolean O
 */

export const TEXT_INPUT_STATES = Object.freeze({
    DEFAULT: 'default',
    ERROR: 'error',
    SUCCESS: 'success',
});

const TextInput = (props) => {
    const inputType = props.password ? 'password' : 'text';
    return (
        <InputWrapper>
            <InputLabel>{props.label}</InputLabel>
            <Input
                value={props.value}
                onChange={(event) => props.onTextInputCallback(event.target.value)}
                state={props.state}
                type={inputType} />
        </InputWrapper>
    )
}

export default memo(TextInput);