import { useMutation } from '@tanstack/react-query';
import Cookies from "js-cookie";


import { useDispatch } from 'react-redux';

import { login } from '../features/authSlice/authSlice';

import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

import request from '../utils/axios-utils';


async function signUp({ firstName, lastName, email, password }) {
    try {
        const response = await request({
            url: '/Register', method: 'post',
            data: {
                firstName,
                lastName,
                email,
                password,
            }
        });

        return response.data;

    } catch (error) {
        throw new Error(`Error during sign-up: ${error.message}`);
    }
}
export function useSignUp(onError) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: signUp,
        onSuccess: (data) => {
            if (data.result === 'This email is already exists') {
                onError();
            }
            else {
                dispatch(login(data));
                Cookies.set("token", data.token);
                localStorage.setItem("token", data.token);
                navigate("../login");
            }
        },
        onError,
    })
}