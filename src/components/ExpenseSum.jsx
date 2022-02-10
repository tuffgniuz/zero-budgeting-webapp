import React, { useState } from 'react';

import Card from './UI/Card';

const ExpenseSum = ({ expenses }) => {
    const [initExpenses, setExpenses] = useState(expenses);

    return (
        <Card
            className="bg-green-lighter"
            cardContent={
                <>
                    <p className="subtitle text-centered">Total expenses</p>
                    <h1 className="text-centered display-1">
                    </h1>
                </>
            }
        />
    )
}

export default ExpenseSum;
