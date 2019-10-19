import React from "react";
import ExpenseForm from './ExpenceForm';

const EditExpencePage = (props) => {

    console.log(props);

    return (
        <div>
            This is EditExpencePage {props.match.params.id}
            <ExpenseForm />
        </div>
    );
}

export default EditExpencePage
