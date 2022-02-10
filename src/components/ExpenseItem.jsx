import React from 'react';

const ExpenseItem = ({ description, amount, date }) => {
    return (
        <tr>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{date.toISOString()}</td>
        </tr>
    )
}

export default ExpenseItem;
