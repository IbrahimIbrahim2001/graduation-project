import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";


import { useNavigate } from 'react-router-dom';

async function signUp({ firstName, lastName, email, password }) {

    try {

        const response = await axios.post('http://localhost:3000/users', {
            firstName,
            lastName,
            email,
            password,
        });
        // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        axios.defaults.withCredentials = true;

        return response.data;

    } catch (error) {
        throw new Error(`Error during sign-up: ${error.message}`);
    }
}
export function useSignUp() {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: signUp,
        onSuccess: (response) => {
            console.log(response.token);
            Cookies.set("token", response.token);
            localStorage.setItem("token", response.token);
            navigate("../main/shops")
        },
        onError: (error) => {
            console.log(error.message);
        }
    })
}