import React, {Component} from 'react';

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Linh Lam',
                address: {
                    street: '3388 Guluzzo Drive',
                    city: 'San Jose',
                    state: 'CA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'standard'
        }
        axios.post('/orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(() => {
                this.setState({loading: false});
                this.props.history.push('/');
            });
    }

    render() {
        let form = (
            <form>
                <input className="Input" type="text" name="name" placeholder="Your name" />
                <input className="Input" type="email" name="email" placeholder="Your email" />
                <input className="Input" type="text" name="street" placeholder="Street" />
                <input className="Input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;