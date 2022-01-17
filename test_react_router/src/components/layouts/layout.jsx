import React from 'react'
import AppBar from '../appbars/header';
import { Outlet } from 'react-router-dom';
import Footer from '../appbars/footer';
import './styles.css'

const path = {
    p1 : "/home",
    p2 : "/top_list"
}

function layout() {
    return (
        <div className='layout--container'>
            <AppBar pathTo={path}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default layout
