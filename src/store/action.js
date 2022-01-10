export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SEARCH_IP_ADDRESS = 'SEARCH_IP_ADDRESS';
export const SEARCH_IP_ADDRESS_SUCCESS = 'SEARCH_IP_ADDRESS_SUCCESS';
export const SEARCH_IP_ADDRESS_ERROR = 'SEARCH_IP_ADDRESS_ERROR';

export const createChangeInputValue = (newValue) => ({
    type: CHANGE_INPUT_VALUE,
    newValue,
});

export const createSearchIpAddress = () => ({
    type: SEARCH_IP_ADDRESS,
});

export const createSearchIpAddressSuccess = (payload) => ({
    type: SEARCH_IP_ADDRESS_SUCCESS,
    payload,
});

export const createSearchIpAddressError = () => ({
    type: SEARCH_IP_ADDRESS_ERROR,
});