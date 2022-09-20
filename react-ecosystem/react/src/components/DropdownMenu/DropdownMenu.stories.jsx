import { useState } from 'react'
import DropdownMenu from './DropdownMenu'

export default {
    title: 'DropdownMenu',
    component: DropdownMenu
}

export const Primary = () => {
    const options = [
        'string1',
        'string2',
        'string3',
    ]

    const [currentValue, setCurrentValue] = useState(null);
    return (<DropdownMenu options={options} currentValue={currentValue} changeValue={setCurrentValue} />)
}