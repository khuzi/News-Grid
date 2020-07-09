import React , { useContext } from 'react'

import ArticleCard from '../../ArticleCard/ArticleCard';
import Aside from '../../Aside/Aside';
import Categories from '../../Categories/Categories';
import { InfoContext } from '../../../Container/Context/Context';
import classes from './Article.module.css';

const Article = () => {
    const value = useContext(InfoContext);
    const data = value.articleInfo;
    return (
        <section>
            <div className="container">
                <div className={classes.PageContainer}>
                    <ArticleCard item={data}/>
                    <Categories />
                    <Aside bg="bg-secondary"/>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Article);
