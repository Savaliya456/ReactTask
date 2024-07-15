import { createStore, applyMiddleware } from 'redux';
import {thunk }from 'redux-thunk';

// Action Types
const INCREMENT = 'INCREMENT'; 
const DECREMENT = 'DECREMENT';

// Action Creators
export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

// Initial State
const initialState = {
    count: 0
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
            
        case DECREMENT:
            return { count: state.count - 1 };
            
        default:
            return state;
    }
};

// Create Store
export const store = createStore(reducer, applyMiddleware(thunk));
