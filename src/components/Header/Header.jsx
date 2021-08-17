import React from 'react';
import styles from "./Header.module.scss"
import Navbar from "../Navigation/Navbar";

const Header = () => {
    return <header className={styles.header} >
        <Navbar/>
    </header>;

};

export default Header;