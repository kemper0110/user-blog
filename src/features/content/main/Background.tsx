import React, {ReactNode} from 'react';

const Background = ({children}: {children: ReactNode | ReactNode[]}) => {
    return (
        <div className='bg-[#e9e9e9] dark:bg-d_bg'>
            {children}
        </div>
    );
};

export default Background;