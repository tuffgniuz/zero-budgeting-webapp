import React from 'react';

import styles from './css/CardFooter.module.css';

const CardFooter = ({ children }) => {
    return (
        <div className={`${styles.card_footer} ${className}`}>
            { children }
        </div>
    )
}

export default CardFooter;
