import Layout from "./Layout";

export default {
    component: Layout,
    title: 'Layouts/Layout'
}

const Template = (args) => (
    <Layout {...args}>
        <h1>Hello world</h1>
    </Layout>
)

export const Primary = Template.bind({});
Primary.args = {};