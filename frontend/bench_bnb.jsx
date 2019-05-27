import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');

    window.getState = store.getState;
    window.despatch = store.dispatch;
    // window.store = store;
    ReactDOM.render(<Root store={store}/>, root);
});






//when you key into [field] its saying [body]: e.target.value or [title]:
//if you dont key in your not refrencing the argument being passed in

//errors only take in actions they dont take in thunk action creators
//actions are basic functions