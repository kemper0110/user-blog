import React from 'react';
import dropdownLogo from '../../../ui/dropdown.svg';
import clockLogo from '../../../ui/clock.svg';

const ClosedArticle = ({label, time}: {label: string, time: string}) => {
    return (
        <article className='flex items-center border border-black/10 justify-between px-8 py-5 bg-white gap-3 text-tw_black text-base leading-4 dark:bg-d_content'>
            <span className='grow dark:text-white'>{label}</span>
            <img src={clockLogo} alt='clock' className='dark:invert'/>
            <span className='dark:text-white'>
                {time} minutes ago
            </span>
            <img src={dropdownLogo} alt='-' className='w-[36px] h-[36px] dark:brightness-200'/>
        </article>
    );
};

export default ClosedArticle;