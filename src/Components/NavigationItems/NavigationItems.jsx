import React from 'react'

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = () => {
    return (
        <ul className={classes.NavList}>
            <NavigationItem exact active itemName="Home" link="/"/>
            <NavigationItem itemName="About" link="/about"/>
        </ul>
    );
};

export default React.memo(NavigationItems);
