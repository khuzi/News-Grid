import React from 'react'

import Showcase from '../../Showcase/Showcase';
import HomeArticles from '../../HomeArticles/HomeArticles';
import About from '../About/About';

const Home = () => {
    return (
        <>
            <Showcase />
            <HomeArticles />
            <About />
        </>
    );
};

export default React.memo(Home);
