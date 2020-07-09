import React from 'react'
import classes from './ArticleCard.module.css';

const ArticleCard = (props) => {
    const data = {
        ...props.item
    }
    return (
        <article className={classes.ArticleCard} style={{ padding: '1rem' }}>
            <img src={data.img} alt="" />
            <h1 className="l-heading">{data.Title}</h1>
            <div className={classes.Meta}>
                <small>
                    <i className="fas fa-users"></i> Written By Khuzaima Yaseen January 12,2019
                </small>
                <div className={["category", data.CategoryClass].join(' ')}>{data.Category}</div>
            </div>
            <p>{data.Desc1}</p>
            <p>{data.Dec2}</p>
        </article>
    );
};

export default React.memo(ArticleCard);
