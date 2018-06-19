import React from 'react';
import './Cockpit.css'

const cockpit = (props) => {
    const pClasses = [];
    const btnClasses = [];
    if (props.persons.length <= 2) {
      pClasses.push('red');
    }
    if (props.persons.length <= 1) {
      pClasses.push('bold');
    }
    if (props.showPersons) {
        btnClasses.push('Red');
    }

    return (
        <div className='Cockpit'>
            <h1>{props.appTitle}</h1>
            <p className={pClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClasses.join(' ')}
                onClick={props.clicked}
            >Toggle Persons</button>
        </div>
    );
};

export default cockpit;