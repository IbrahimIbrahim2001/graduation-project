import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { login } from '../features/authSlice/authSlice';

async function signIn({ email, password }) {
    try {
        const response = await axios.post(`http://localhost:3000/login`, {
            email,
            password,
        });
        // axios.defaults.withCredentials = true;
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(`Error during sign-in: ${error.message}`);
    }
}

export function useSignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            console.log(data);
            Cookies.set("token", data.token);
            localStorage.setItem("token", data.token);
            dispatch(login(data));
            data.result === "seller" ? navigate('../my-shop') : navigate('../main/shops');
        },
        onError: (error) => {
            if (error.message.includes('Invalid password')) {
                navigate('/login', { replace: true });
            }
        },
    })
}