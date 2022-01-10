import { createStore, applyMiddleware, compose } from "redux";

import reducer from './reducer';

import informationMiddleware from './middlewares/informationMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        informationMiddleware,
    ),
);

const store = createStore(reducer, enhancers);

export default store;