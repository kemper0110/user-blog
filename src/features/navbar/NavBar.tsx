import React from 'react';

import MainBar from "./MainBar";
import SubBar from "./SubBar";


const NavBar = () => {
    return (
        <header className=' dark:text-white'>
            <MainBar/>
            <SubBar/>
        </header>
    );
};


export default NavBar;