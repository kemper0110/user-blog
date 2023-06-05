import React, {ReactNode} from 'react';

const Content = ({children}: {children: ReactNode | ReactNode[]}) => {
    //
    return (
        <div className='flex flex-col-reverse xl:flex-row md:flex-col-reverse max-w-[1440px] md:p-10 md:gap-10 mx-auto'>
            {children}
        </div>
    );
};

export default Content;