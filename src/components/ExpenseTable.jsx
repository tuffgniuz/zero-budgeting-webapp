import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './UI/Card';
import EmptyPage from './UI/EmptyPage';
import styles from './css/ExpenseTable.module.css';

const ExpenseTable = ({ expenses }) => {
    if (expenses.length === 0) {
        return <EmptyPage />
    }

    return (
        <Card
            className="bg-secondary-green"
            cardContent={
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense) => (
                            <ExpenseItem
                                key={expense.id.toString()}
                                description={expense.description}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        ))}
                    </tbody>
                </table >
            }
        />
    )
}

export default ExpenseTable;
