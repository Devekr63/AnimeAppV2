import React from 'react'
import AppBar from '../appbars/header';
import { Outlet } from 'react-router-dom';

const path = {
    p1 : "/hello",
    p2 : "/name"
}

function layout() {
    return (
        <div>
            <nav>
                <AppBar pathTo={path}/>
            </nav>
            <Outlet/>
        </div>
    )
}

export default layout
