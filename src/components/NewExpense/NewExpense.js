import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState();

	const saveExpenseDataHandler = (enteredExpenseData) => {
		// Add id dynamically
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
        setIsEditing(false);
	};

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

	return (
		<div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense Data</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
		</div>
	);
}

export default NewExpense;