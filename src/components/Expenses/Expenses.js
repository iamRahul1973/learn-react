import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import { useState } from 'react';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2019');
    const changeSelectedYear = (year) => {
        setSelectedYear(year);
    };

    const filteredExpenses = props.expenses.filter(
        expense => parseInt(expense.date.getFullYear()) === parseInt(selectedYear)
    );

	return (
		<Card className="expenses">
            <ExpenseFilter selected={selectedYear} onChangeYear={changeSelectedYear} />
            <ExpenseList items={filteredExpenses} />
		</Card>
	);
}

export default Expenses;