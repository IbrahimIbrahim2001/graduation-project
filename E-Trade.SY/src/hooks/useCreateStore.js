import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
async function createNewStore(newStoreData) {
    try {
        // const token = localStorage.getItem('token');
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // };

        const response = await axios.post('http://localhost:3000/stores', newStoreData);

        const token = response.data.token;
        localStorage.setItem('token', token);

        return response.data;
    } catch (error) {
        throw new Error(`Error creating store: ${error.message}`);
    }
}

export function useCreateStore() {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: createNewStore,
        onSuccess: () => navigate("../my-shop"),
        onError: (error) => console.log(error)
    });

}