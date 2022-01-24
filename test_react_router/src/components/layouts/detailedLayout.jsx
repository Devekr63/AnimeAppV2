import React from 'react';
import {Outlet} from 'react-router-dom';

const styles={
    minHeight:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

function detailedLayout() {
  return (
    <div style={styles}>
        <Outlet/>
    </div>
  );
}

export default detailedLayout;
