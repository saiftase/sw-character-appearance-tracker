import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { loading } from './reducers/loading';
import { characters } from './reducers/characters';
import { movies } from './reducers/movies';
import characterService from './service/characterService'


import App from './pages/App';

const rootReducer =  combineReducers({ characters, movies, loading });
const store = createStore(rootReducer, {}, applyMiddleware(characterService));

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
store.dispatch({type: 'GET_CHARACTERS'});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
