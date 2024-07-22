import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { login } from '../features/authSlice/authSlice';

import request from "../utils/axios-utils";

//
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



//
export function useSignIn(onError) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            Cookies.set("token", data.token);
            //if the loggedin user is a customer, then we need to save the data for future add to cart requests - the backend api endpoint requires a Cookie named userId 
            if (data.customer) {
                Cookies.set("userId", parseInt(data?.customer.id));
            }
            localStorage.setItem("token", data.token);
            dispatch(login(data));
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