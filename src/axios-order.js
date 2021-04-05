import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://build-burger-10fc2-default-rtdb.firebaseio.com/'
});

export default instance;