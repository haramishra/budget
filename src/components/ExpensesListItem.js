import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeExpences } from '../actions/expenses'

const ListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        <button onClick={
            () => {
                dispatch(removeExpences({ id }));
            }
        }>
            Remove
        </button>
    </div>
)



export default connect()(ListItem);