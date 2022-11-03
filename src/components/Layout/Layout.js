import React from 'react';
import styles from '../Layout/Layout.module.scss';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <div className={styles.layoutWrapper}>
            <Outlet />
        </div>
    )
}

export default Layout;