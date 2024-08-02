//react query
import {
    useMutation
} from '@tanstack/react-query';
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
//utils
import request from "../utils/axios-utils";

//hooks
// import { fetchCart } from "./useFetchShopCart";
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice/authSlice';

async function signIn({ email, password, }) {
    try {
        const response = await request({ url: '/login', method: 'post', data: { email, password } });
        axios.defaults.withCredentials = true;
        return response.data;
    } catch (error) {
        throw new Error(`Error during sign-in: ${error.message}`);
    }
}

const logout = async () => {
    const response = await request({ url: "logout", method: "get" });
    return response;
}

export function useSignIn(onError) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            dispatch(login(data));

            localStorage.setItem('token', data.token);
            Cookies.set("token", data.token);
            if (data?.customer) {  //if the loggedin user is a customer, then we need to save the data for future add to cart requests - the backend api endpoint requires a Cookie named userId 
                Cookies.set("userId", parseInt(data?.customer.id));
                dispatch(login(data));
            } else if (data?.seller) {  //if the loggedin user is a seller, then we need to save the data for future add to cart requests - the backend api endpoint requires a Cookie named sellerId 
                Cookies.set("sellerId", parseInt(data?.seller.id));
                dispatch(login(data));
            }
            localStorage.setItem("token", data.token);
            data.seller ? navigate('../my-shop/my-products') : navigate('../main/shops');

        },
        onError,
    })
}


export function useLogOut() {
    return useMutation({
        mutationKey: 'logout',
        mutationFn: logout,
    })
}