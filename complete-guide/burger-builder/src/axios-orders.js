import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-n13.firebaseio.com'
});

export default instance;