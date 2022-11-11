import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';

const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer);


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
);