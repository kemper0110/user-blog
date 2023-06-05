import React from 'react';
import dropdownLogo from '../../../ui/dropdown.svg';

const Message = () => {
    return (
        <div className='flex flex-col grow divide-y-2 dark:divide-d_divider bg-white border border-black/10 dark:bg-d_content'>
            <div className='flex justify-between px-4 py-2 items-center'>
                <span className='font-medium leading-5 dark:text-white'>Share your thoughts</span>
                <img src={dropdownLogo} alt='' className='dark:brightness-200'/>
            </div>
            <div className='flex flex-col grow gap-2 px-4 py-2'>
                <textarea placeholder='Enter your message...'
                          className='grow border-2 dark:border-d_divider rounded px-3 py-1 resize-none placeholder:text-second_tx dark:bg-d_content dark:placeholder:brightness-150'
                />
                <button className='bg-tw_blue text-white py-1 rounded font-medium'>Save</button>
            </div>
        </div>
    );
};

export default Message;