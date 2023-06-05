import React from 'react';

import Article from "../article/Article";
import ClosedArticle from "../article/ClosedArticle";

const Main = () => {
    // w-[1080px]
    // max-w-[1080px]
    return (
        <main className='grow shrink flex flex-col h-full md:gap-8'>
            <Article/>
            <ClosedArticle label='Sunset Sunset Sunset' time='53'/>
            <ClosedArticle label='Morning of Siberia' time='56'/>
        </main>
    );
};




export default Main;