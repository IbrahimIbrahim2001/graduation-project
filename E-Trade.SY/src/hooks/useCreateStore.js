import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

async function createNewStore(newStoreData) {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.post('/api/stores', newStoreData, config);

        if (response.status !== 200) {
            throw new Error('Failed to create store');
        }

        return response.data;
    } catch (error) {
        throw new Error(`Error creating store: ${error.message}`);
    }
}

export function useCreateStore() {
    const createStoreMutation = useMutation(createNewStore);

    return createStoreMutation;
}