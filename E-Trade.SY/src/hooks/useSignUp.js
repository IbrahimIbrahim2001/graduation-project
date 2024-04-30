import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

async function signUp({ email, password, role }) {
    try {
        const response = await axios.post('/api/auth/signup', {
            email,
            password,
            role,
        });

        if (response.status !== 200) {
            throw new Error('Failed to sign up');
        }

        const token = response.data.token;

        localStorage.setItem('token', token);


        const decodedToken = jwtDecode(token);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return decodedToken;
    } catch (error) {
        throw new Error(`Error during sign-up: ${error.message}`);
    }
}

export function useSignUp() {
    const { mutate: signUpMutation } = useMutation(signUp);

    return signUpMutation;
}