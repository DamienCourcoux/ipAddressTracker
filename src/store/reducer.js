import {
    CHANGE_INPUT_VALUE,
    SEARCH_IP_ADDRESS_SUCCESS,
    SEARCH_IP_ADDRESS_ERROR,
    SEARCH_IP_ADDRESS_LOAD,
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
    region: '',
    country: '',
    isSuccess: false,
    isError: false,
    isLoad: false,

};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.newValue,
                lat: '',
                lng: '',
                ip: '',
                city: '',
                postalCode: '',
                timezone: '',
                isp: '',
                region: '',
                country: '',
                isSuccess: false,
                isError: false,
                isLoad: false,
            };
        
        case SEARCH_IP_ADDRESS_SUCCESS:
            return {
                ...state,
                inputValue: '',
                lat: action.payload.location.lat,
                lng: action.payload.location.lng,
                ip: action.payload.ip,
                city: action.payload.location.city,
                postalCode: action.payload.location.postalCode,
                timezone: action.payload.location.timezone,
                isp: action.payload.isp,
                region: action.payload.location.region,
                country: action.payload.location.country,
                isSuccess: true,
                isLoad: false,
            };

        case SEARCH_IP_ADDRESS_ERROR:
            return {
                ...state,
                inputValue: '',
                lat: '',
                lng: '',
                ip: '',
                city: '',
                postalCode: '',
                timezone: '',
                isp: '',
                region: '',
                country: '',
                isError: true,
                isLoad: false,
            };

        case SEARCH_IP_ADDRESS_LOAD:
            return {
                ...state,
                isLoad: true,
            };
    
        default:
            return state;
    }
};

export default reducer;