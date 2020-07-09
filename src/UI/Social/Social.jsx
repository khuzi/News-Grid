import React from 'react'

import classes from './Social.module.css';

const Social = () => {
    return (
        <div className={classes.Social}>
            <a href="http://facebook.com"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="http://twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="http://instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
            <a href="http://youtube.com"><i className="fab fa-youtube fa-2x"></i></a>            
        </div>
    );
};

export default React.memo(Social);
