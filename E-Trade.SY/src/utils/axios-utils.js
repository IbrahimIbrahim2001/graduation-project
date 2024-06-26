import axios from "axios";

const client = axios.create({ baseURL: 'http://localhost:3000' })


const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = 'Bearer token';
    const onSuccess = (response) => {
        // console.log(response);
        return response;
    };
    const onError = (error) => {

        return error;
    }
    return client(options).then(onSuccess).catch(onError);
}


export default request;