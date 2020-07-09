import React from 'react'
import { Link } from 'react-router-dom';
 
import classes from './Categories.module.css';

const Categories = () => {
    return (
        <aside className={classes.Categories}>
            <h2>Categories</h2>
            <ul className="list">
                <li><Link to="/"><i className="fas fa-chevron-right"></i> Sports</Link></li>
                <li><Link to="/"><i className="fas fa-chevron-right"></i> Entertainment</Link></li>
                <li><Link to="/"><i className="fas fa-chevron-right"></i> Technology</Link></li>
                <li><Link to="/"><i className="fas fa-chevron-right"></i> Fashion</Link></li>
                <li><Link to="/"><i className="fas fa-chevron-right"></i> Shopping</Link></li>
            </ul>
        </aside>
    );
};

export default React.memo(Categories);
