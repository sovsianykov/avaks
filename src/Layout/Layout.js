import React from 'react';
import Header from "../components/Header/Header";

const Layout =({children}) =>{
    return(
        <>
            <div>
            <Header/>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout;