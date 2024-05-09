import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import { jwtDecode } from "jwt-decode";

import { useNavigate } from 'react-router-dom';

async function signUp({ firstName, lastName, email, password }) {

    try {
        // const token = localStorage.getItem('token');
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // };

        const response = await axios.post('http://localhost:3000/users', {
            firstName,
            lastName,
            email,
            password,
        });

        return response.data;

    } catch (error) {
        throw new Error(`Error during sign-up: ${error.message}`);
    }
}
export function useSignUp() {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: signUp,
        onSuccess: () => navigate("../main/shops"),
        onError: (error) => {
            console.log(error.message);
        }
    })
}