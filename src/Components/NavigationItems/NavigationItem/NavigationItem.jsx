import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={classes.ListItem}>
            <NavLink exact={props.exact} activeClassName={classes.active} to={props.link}>{props.itemName}</NavLink>
        </li>        
    );
};

export default React.memo(NavigationItem);










// import { Link } from 'react-scroll';
// duration={500} offset={-150} spy={true} smooth={true} activeClass={classes.active}