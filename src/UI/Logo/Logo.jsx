import React from 'react'

const Logo = (props) => {
    return (
        <img style={{width: '180px' , cursor: 'pointer'}} src={props.url} alt="News-Grid"/>
    );
};

export default React.memo(Logo);
