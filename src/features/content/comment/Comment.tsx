import React from 'react';
import commentLogo from '../../../ui/comment.svg';

const Comment = () => {
    return (
        <div className='flex flex-col mt-1'>
            <div className='m-3 ml-1'>
                <img className='inline w-[20px] h-[20px] dark:invert' src={commentLogo} alt='comment'/>
                <span className='ml-2 text-sm'>
                    <span className='text-tw_blue'>Jason Anderson</span>
                    <span className='text-tw_black dark:text-white'> commented:</span>
                </span>
            </div>
            <div className='border-l pl-3'>
                <div className='leading-4 font-normal font-basic text-sm text-tw_black dark:text-white/80'>
                    Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.
                </div>
                <div className='mt-3 font-normal text-second_tx text-sm'>
                    <span>– Jason,</span>
                    <span className='italic'> 10:30 am</span>
                </div>
            </div>

        </div>
    );
};

export default Comment;