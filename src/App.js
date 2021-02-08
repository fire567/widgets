import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import reactDom from 'react-dom';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },

    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },

    {
        title: 'How do you use React?',
        content: 'You are uses Ract by creating components'
    }
]

const options = [
    {
        label: "The Color Red",
        value: "red",
    },

    {
        label: "The Color Green",
        value: "green",
    },

    {
        label: "The Color Blue",
        value: "blue",
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0])
    return (
    <h1>
        <Dropdown 
            selected={selected} 
            onSelectedChange={setSelected}
            options={options}/>
    </h1>
    )
};