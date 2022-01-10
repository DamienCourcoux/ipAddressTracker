import {
    CHANGE_INPUT_VALUE,
    SEARCH_IP_ADDRESS_SUCCESS,
    SEARCH_IP_ADDRESS_ERROR,
} from './action';

const initialState = {
    inputValue: '',
    lat: '',
    lng: '',
    ip: '',
    city: '',
    postalCode: '',
    timezone: '',
    isp: '',
    isSuccess: false,
    isError: false,

};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.newValue,
                isSuccess: false,
            };
        
        case SEARCH_IP_ADDRESS_SUCCESS:
            return {
                ...state,
                lat: action.payload.location.lat,
                lng: action.payload.location.lng,
                ip: action.payload.ip,
                city: action.payload.location.city,
                postalCode: action.payload.location.postalCode,
                timezone: action.payload.location.timezone,
                isp: action.payload.isp,
                isSuccess: true,
                inputValue: '',
            };

        case SEARCH_IP_ADDRESS_ERROR:
            return {
                ...state,
                isError: true,
                inputValue: '',
            };
    
        default:
            return state;
    }
};

export default reducer;