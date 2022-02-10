import React from 'react';

import styles from './css/Card.module.css'

const Card = ({ cardContent, className }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.card_content}>{ cardContent }</div>
        </div>
    )
}

export default Card;
