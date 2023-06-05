import React from 'react';
import retrowave from "../../../ui/retrowave.png";
import Comment from "../comment/Comment";

import eyeLogo from '../../../ui/eye.svg';
import commentLogo from '../../../ui/comment.svg';

const Article = () => {
    return (
            <article className='flex flex-col bg-white dark:bg-d_content dark:text-white p-8 pt-14 border border-black/10 font-basic'>
                <img src={retrowave} alt='retrowave article' className='max-w-full h-auto'/>
                <Comment/>
                <div className='flex mt-3 gap-9'>
                    <Stat label='432' icon={eyeLogo}/>
                    <Stat label='47' icon={commentLogo}/>
                </div>
            </article>
    );
};

const Stat = ({label, icon}: {label: string, icon: string}) => {
    // w-[20px] h-[20px]
    return (
        <div className='flex gap-3 items-center'>
            <img className='dark:invert' src={icon} alt=''/>
            <span className='text-base leading-4 text-tw_black dark:text-white'>{label}</span>
        </div>
    )
}

export default Article;