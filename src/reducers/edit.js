import { CHANGE_TEXT } from '../constants/actions';

const initialState = {
    content: ''
};

export default function edit(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            return {...state, content: action.payload};

        default:
            return state;
    }
};