import React from 'react';

import Card from './Card';

const EmptyPage = ({ cardContent }) => {
    return (
        <Card
            className="bg-secondary-green"
            cardContent={
                <p className="text-centered">Wow, such empty</p>
            }
        />
    )
}

export default EmptyPage;
