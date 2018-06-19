import React from 'react';
import './Person.css';

const person = (props) => {
    // if (Math.random() > 0.9) {
    //     throw new Error('Somether went wrong');
    // }
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;