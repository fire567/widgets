import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
    return (
    <h1>
        <Accordion items={items} />
    </h1>
    )
};