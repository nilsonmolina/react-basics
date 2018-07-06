import React, {Component} from 'react';
import Button from '../../UI/Button/Button';

// THIS COULD BE A FUNCTIONAL COMPONENT, BUT FOR DEBUGGING 
class OrderSummary extends Component 
{
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingrKey => {
            return (
                <li key={ingrKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingrKey}</span>: {this.props.ingredients[ingrKey]}
                </li>
            );
        })
        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </React.Fragment>
        );
    }
}

export default OrderSummary;