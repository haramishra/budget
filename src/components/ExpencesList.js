import React from 'react';
import { connect } from 'react-redux';
import selectList from "../selectors/expenses"
import ListItem from './ExpensesListItem'

const ExpenseList = (props) => (
    <div>
        {props.expences.map(item => (
            <ListItem key={item.id} {...item} />
        ) )}
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expences: selectList(state.expences, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);