import React from 'react'

import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    switch (props.element) {
        case 'input':
            inputElement = <input {...props}/>    
            break;
        case 'textarea':
            inputElement = <textarea {...props}></textarea>
            break;
        default:
            inputElement = <input {...props}/>
            break;
    }
    return (
        <div className={classes.formGroup}>
            <label for={props.for}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default React.memo(Input);
