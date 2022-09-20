import CustomForm from "./CustomForm";

export default {
    title: 'CustomForm',
    component: CustomForm
}

const Template = (args) => <CustomForm {...args} />

export const Primary = Template.bind({});
Primary.args = {}