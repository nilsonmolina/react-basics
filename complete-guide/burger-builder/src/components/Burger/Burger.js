import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingreKey => {
            return [...Array(props.ingredients[ingreKey])].map((_, i) => {
                return <BurgerIngredient key={ingreKey + i} type={ingreKey} />;
            });
        })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;