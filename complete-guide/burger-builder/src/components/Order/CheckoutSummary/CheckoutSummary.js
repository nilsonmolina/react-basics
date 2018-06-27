import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope you enjoy your custom burger!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
                <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
            </div>
        </div>
    );
}

export default checkoutSummary;