import React from 'react'

import logoUrl from '../../logo.png';

import classes from  './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';
import Social from '../../UI/Social/Social';

const Toolbar = () => {
    return (
        <nav className={classes.Navbar}>
            <div className={[classes.NavContainer , "container"].join(' ')}>
                <Logo url={logoUrl}/>
                <Social />
                <NavigationItems />
            </div>
        </nav>
    );
};

export default React.memo(Toolbar);
