import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from "js-cookie";

import { useDispatch } from 'react-redux';

import { login } from '../features/authSlice/authSlice';

import { useNavigate } from 'react-router-dom';
async function createNewStore(newStoreData) {
    try {
        const response = await axios.post(
            "http://localhost:3000/create-store",
            newStoreData
        );
        return response.data;
    } catch (error) {
        throw new Error(`Error creating store: ${error.message}`);
    }
}

export function useCreateStore() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: createNewStore,
        onSuccess: (data) => {
            dispatch(login(data));
            Cookies.set("token", data.token);
            localStorage.setItem("token", data.token);
            navigate("../my-shop")
        },
        onError: (error) => console.log(error.message)
    });
}