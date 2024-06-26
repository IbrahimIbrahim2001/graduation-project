import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';
import Cookies from "js-cookie";

import { useDispatch } from 'react-redux';

import { login } from '../features/authSlice/authSlice';
import { useNavigate } from 'react-router-dom';

import request from '../utils/axios-utils';


async function createNewStore(newStoreData) {
    try {
        const response = await request({ url: '/create-store', method: 'post', data: { ...newStoreData } })

        return response.data;

    } catch (error) {
        throw new Error(`Error creating store: ${error.message}`);
    }
}

export function useCreateStore(onError) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: createNewStore,
        onSuccess: (data) => {
            if (data.result === "This Store is already exists") {
                onError();
            }
            dispatch(login(data));
            Cookies.set("token", data.token);
            localStorage.setItem("token", data.token);
            navigate("../login")
        },
        onError,
    });
}