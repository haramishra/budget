import React from "react";
import ExpenceList from './ExpencesList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenceDashbordPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenceList />
    </div>
    
    
);
export default ExpenceDashbordPage;
