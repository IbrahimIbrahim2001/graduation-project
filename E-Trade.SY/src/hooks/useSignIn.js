import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function signIn({ email, password }) {
    try {
        const response = axios.post(`http://localhost:3000/users`, {
            email,
            password,
        });
        axios.defaults.withCredentials = true;
        return response.data;
    } catch (error) {
        throw new Error(`Error during sign-in: ${error.message}`);
    }
}

export function useSignIn() {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            const token = data.token;
            const userData = jwtDecode(token);
            const username = userData.name;
            const userId = userData.user_id;
            navigate('../main/shops', { state: { username, userId } });
        },
        onError: (error) => console.log(error.message),
    })
}