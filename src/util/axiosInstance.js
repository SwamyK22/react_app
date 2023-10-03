import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    timeout:'5000',
    timeoutErrorMessage:'Please try again sometime'
});

export default axiosInstance;