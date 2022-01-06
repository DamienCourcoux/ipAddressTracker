import {
    CHANGE_INPUT_VALUE,
} from './action';

const initialState = {
    inputValue: '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.newValue,
            };
    
        default:
            return state;
    }
};

export default reducer;