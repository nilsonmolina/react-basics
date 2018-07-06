import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        { props.isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
        { props.isAuth 
            ? <NavigationItem link="/logout">Logout</NavigationItem>
            : <NavigationItem link="/auth">Authenticate</NavigationItem>
        }
    </ul>
)

export default navigationItems;