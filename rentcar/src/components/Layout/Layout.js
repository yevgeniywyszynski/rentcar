import React from 'react';
import styles from '../Layout/Layout.module.scss';
import {Outlet} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
    return(
        <div className={styles.layoutWrapper}>
            <Navigation />
            <Outlet />
        </div>
    )
}

export default Layout;