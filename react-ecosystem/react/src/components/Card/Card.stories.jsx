import Card from './Card'

export default {
    title: 'UI/Valami/Card',
    component: Card
}

export const Primary = () => <Card><h1>Valami</h1></Card>

const PrimaryTemplate = (args) => <Card {...args}></Card>

export const Secondary = PrimaryTemplate.bind({});
Secondary.args = {
    isText: false,
    children: 'valami szöveg'
}

Secondary.storyName = 'Valami másik állapot';