import React , { useContext } from 'react'

import classes from './HomeArticles.module.css';
import Card from '../../UI/Card/Card';

import { InfoContext } from '../../Container/Context/Context';

const HomeArticles = () => {
    const style = {
        padding: '2.5rem 1rem',
        height: '100%'
    }
    const value  = useContext(InfoContext);
    const data = {
        ...value.homeArticle
    }
    return (
        
        <section id="homeArticles" className={[classes.HomeArticles, "py-2"].join(' ')}>
            <div className="container">
                <h2>Editor Picks</h2>
                <div className={classes.ArticlesContainer}>
                    <article className={classes.MainCard}>
                        <img src={data[0].img} alt="" />
                        <Card id={data[0].id} categoryClasses="category category-ent" category="Entertainment" />
                    </article>
                    <article>
                        <Card categoryClasses="category category-sports" bg="bg-dark" styles={style} category="Sports" />
                    </article>
                    <article className={classes.MainCard}>
                        <img src={data[1].img} alt="" />
                        <Card id={data[1].id} categoryClasses="category category-tech" category="Technology" />
                    </article>
                    <article className={classes.MainCard}>
                        <Card id={data[2].id} categoryClasses="category category-sports" category="Sports" />
                        <img src={data[2].img} alt="" />
                    </article>
                    <article className={classes.MainCard}>
                        <img src={data[3].img} alt="" />
                        <Card id={data[3].id} categoryClasses="category category-tech" category="Technology" />
                    </article>
                    <article>
                        <Card categoryClasses="category category-sports" bg="bg-primary" styles={style} category="Sports" />
                    </article>
                    <article className={classes.MainCard}>
                        <Card id={data[4].id} categoryClasses="category category-ent" category="Entertainment" />
                        <img src={data[4].img} alt="" />
                    </article>
                </div>
            </div>
        </section>
    );
};

export default React.memo(HomeArticles);
