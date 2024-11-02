import React from 'react';
import { Outlet } from 'react-router-dom';
import BasicExample from './components/Navbar.Jsx';


const Layout = () => {
    return (
        <>
           <BasicExample />
           
                <Outlet />
          
        </>
    );
};

export default Layout;
