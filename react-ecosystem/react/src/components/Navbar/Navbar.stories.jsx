import Navbar from "./Navbar";

export default {
    title: 'Navbar',
    component: Navbar
}

const template = (args) => <Navbar {...args} />

export const Primary = template.bind({});
Primary.args = {}