import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;