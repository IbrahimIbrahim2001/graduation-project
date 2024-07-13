import axios from "axios";

//had to be imported to be used in ImageCarousel.jsx && ShopItemCard && SellerShopProductCard for images till we find a hosting and a better way
export const BASEURL = 'http://localhost:3000';

const client = axios.create({
    baseURL: BASEURL
});

const token = localStorage.getItem('token');

const request = async ({ ...options }) => {

    options.withCredentials = true;
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
    const onSuccess = (response) => {
        return response;
    };
    const onError = (error) => {
        console.log(error);
        return error;
    };
    return client(options).then(onSuccess).catch(onError);
};

export default request;