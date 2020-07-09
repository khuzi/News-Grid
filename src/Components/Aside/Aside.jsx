import React from 'react'
import classes from './Aside.module.css';

import Button from '../../UI/Button/Button';

const Aside = (props) => {
    return (
        <div className={[classes.Aside , props.bg].join(' ')}>
            <h2>Join Our Club</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, harum!</p>
            <Button link="/">Join Now</Button>
        </div>
    );
};

export default React.memo(Aside);
