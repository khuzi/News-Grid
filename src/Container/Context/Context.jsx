import React , { useState , createContext } from 'react'

import { article , articleDetail } from '../../data';

export const InfoContext = createContext(); 

const Context = (props) => {
    const [state,setState] = useState({
        homeArticle: article,
        articleInfo: articleDetail,
    })

    const handleDetail = (id) => {
        const item = state.homeArticle.find(item => item.id === id);
        const updatedState = {
            ...state,
            articleInfo: item
        } 
        setState({
            ...updatedState
        });
    };
    return (
        <InfoContext.Provider value={{
            homeArticle: state.homeArticle,
            articleInfo: state.articleInfo,
            handleDetail: handleDetail
        }}>
            {props.children}
        </InfoContext.Provider>
    );
};

export default React.memo(Context);
