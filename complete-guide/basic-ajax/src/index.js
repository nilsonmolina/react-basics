import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(requestConfig => {
    console.log('[requestConfig]', requestConfig);
    // Edit request config
    return requestConfig;
}, error => {
    console.log('[request error]\n', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('[response]', response);
    // Edit response config
    return response;
}, error => {
    console.log('[response error]\n', error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
