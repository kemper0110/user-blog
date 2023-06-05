import React from 'react';
import NavBar from "./features/navbar/NavBar";
import Main from "./features/content/main/Main";
import Aside from "./features/content/aside/Aside";
import Background from "./features/content/main/Background";
import Content from "./features/content/main/Content";

function App() {
    return (
        <div className='font-basic'>
            <NavBar/>
            <Background>
                <Content>
                    <Main/>
                    <Aside/>
                </Content>
            </Background>
        </div>
    );
}

export default App;
