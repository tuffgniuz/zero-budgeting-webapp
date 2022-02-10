import React from 'react';

import styles from './css/NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <h1>ZeRoh</h1>
                <nav>
                    <ul>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default NavBar;
