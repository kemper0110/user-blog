import React from 'react';
import User from "./User";
import Navigation from "./Navigation";
import Message from "./Message";

const Aside = () => {
    return (
        <aside className='flex flex-col md:flex-row xl:flex-col md:gap-8 shrink-0'>
            <User/>
            <Navigation/>
            <Message/>
        </aside>
    );
};

export default Aside;