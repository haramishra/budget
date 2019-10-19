import React from "react";
import { connect } from "react-redux"
import ExpenceForm from './ExpenceForm'
import { addExpences } from '../actions/expenses'

const AddExpencePage = (props) => (
    <div>
        <ExpenceForm
            onSubmit={(expences) => {
                props.dispatch(addExpences(expences));
                props.history.push('/');
            }}
        />
        This is Add expence dashboard
    </div>
);

export default connect()(AddExpencePage);
