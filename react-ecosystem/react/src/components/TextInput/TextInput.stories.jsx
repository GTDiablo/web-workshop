import { useState } from "react";
import TextInput, {TEXT_INPUT_STATES} from "./TextInput";

export default {
    title: 'Inputs/TextInput',
    component: TextInput,
}

const Template = (args) => {
    const [value, setValue] = useState('valami');
    return (
    <TextInput
        onTextInputCallback={setValue}
        value={value} {...args}/>
        )
}

const onTextInputCallback = (value) => {
    console.log(`[Stroybook: TextInput] ${value}`);
}

const defaultArgs = {
    label: 'Give us your data:',
    // onTextInputCallback,
    password: false,
}

export const Basic = Template.bind({});
Basic.args = {
    ...defaultArgs,
    state: TEXT_INPUT_STATES.DEFAULT
}

Basic.storyName = 'Default state';

// Info: Error state
export const Error = Template.bind({});
Error.args = {
    ...defaultArgs,
    state: TEXT_INPUT_STATES.ERROR
}

Error.storyName = 'Error state';

// Info: Success state
export const Success = Template.bind({});
Success.args = {
    ...defaultArgs,
    state: TEXT_INPUT_STATES.SUCCESS
}

Success.storyName = 'Success state';

// Info: Password Basic state
export const Password = Template.bind({});
Password.args = {
    ...defaultArgs,
    state: TEXT_INPUT_STATES.DEFAULT,
    password: true
}

Password.storyName = 'Password Basic state';