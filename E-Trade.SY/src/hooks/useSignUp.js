import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import { useDispatch } from 'react-redux';

import { login } from '../features/authSlice/authSlice';

import { useNavigate } from 'react-router-dom';

async function signUp({ firstName, lastName, email, password }) {
    try {
        const response = await axios.post('http://localhost:3000/Register', {
            firstName,
            lastName,
            email,
            password,
        });

        console.log(response);

        return response.data;

    } catch (error) {
        throw new Error(`Error during sign-up: ${error.message}`);
    }
}
export function useSignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: signUp,
        onSuccess: (data) => {
            dispatch(login(data));
            Cookies.set("token", data.token);
            localStorage.setItem("token", data.token);
            navigate("../main/shops")
        },
        onError: (error) => {
            console.log(error.message);
        }
    })
}