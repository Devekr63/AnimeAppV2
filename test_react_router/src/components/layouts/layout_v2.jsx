import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';

function layout_v2() {
    return (
        <div>
            <nav>
                <button>
                    <NavLink
                        to="/hello"
                        style={{textDecoration : "none"}}>
                        Hello
                    </NavLink>
                </button>
            </nav>
            <Outlet/>
        </div>
    )
}

export default layout_v2
