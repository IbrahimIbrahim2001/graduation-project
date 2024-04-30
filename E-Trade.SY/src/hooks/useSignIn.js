import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

async function signIn({ email, password }) {
    try {
        const response = await axios.post('/api/auth/signin', {
            email,
            password,
            // role,
        });

        if (response.status !== 200) {
            throw new Error('Failed on sign-in request');
        }

        const token = response.data.token;

        localStorage.setItem('token', token);

        const decodedToken = jwtDecode(token);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return decodedToken;
    } catch (error) {
        throw new Error(`Error during sign-in: ${error.message}`);
    }
}

export function useSignIn() {
    const { mutate: signInMutation } = useMutation(signIn);

    return signInMutation;
}