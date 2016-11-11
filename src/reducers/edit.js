import { CHANGE_TEXT } from '../constants/constants';

const initialState = {
    content: ''
};

export default function edit(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            return {...state, content: action.payload};
            break;
        default:
            return state;
    }
};