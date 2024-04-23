import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

async function signIn({ email, password }) {
    try {
        const response = await axios.post('/api/auth/signin', {
            email,
            password,
        });

        if (response.status !== 200) {
            throw new Error('Failed on sign-in request');
        }

        return response.data;
    } catch (error) {
        throw new Error('Error during sign-in:', error);
    }
}

export function useSignIn() {
    const { mutate: signInMutation } = useMutation(signIn);

    return signInMutation;
}