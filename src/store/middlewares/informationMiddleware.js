import axios from "axios";

import {
    SEARCH_IP_ADDRESS,
    createSearchIpAddressSuccess,
    createSearchIpAddressError,
    createSearchIpAddressLoad,
} from '../action';

const informationMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEARCH_IP_ADDRESS: {
            const { inputValue } = store.getState();
            store.dispatch(createSearchIpAddressLoad());

            if (inputValue !== '') {
                axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_EjcGNXv2oUY0T3ynxcUj3W20ygVWw&ipAddress=${inputValue}`)
                .then((response) => {
                    store.dispatch(createSearchIpAddressSuccess(response.data));
                })
                .catch(() => {
                    store.dispatch(createSearchIpAddressError());
                });
            } else {
                store.dispatch(createSearchIpAddressError());
            }

            
            next(action);
            break;
        }
    
        default:
            next(action);
            break;
    }
};

export default informationMiddleware;