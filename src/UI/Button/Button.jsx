import React from 'react'
import { Link } from 'react-router-dom';

import classes from './Button.module.css';


let attachedClasses = null;
const Button = (props) => {
    switch (props.bg) {
        case 'primary':
            attachedClasses=["btn" , classes.BtnPrimary]
            break;
        case 'secondary':
            attachedClasses=["btn" , classes.BtnSecondary]
            break;
        case 'light':
            attachedClasses=["btn" , classes.BtnLight]
            break;        
        default:
            attachedClasses=["btn"]
            break;
    }
    return (
        <div style={{width: props.width}}>
            <Link className={attachedClasses.join(' ')} to={props.link} onClick={props.clicked}>{props.children}</Link>
        </div>
    );
};

export default React.memo(Button);
