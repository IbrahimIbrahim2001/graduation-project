//react query
import { useMutation } from "@tanstack/react-query";

//utils
import request from "../utils/axios-utils";


const updateStoreData = async (data) => {
    console.log(data);
    const response = await request({ url: '/UpdateStoreInfo', method: 'post', data: data });
    return response.data;
}

export function useUpdateStore() {
    return useMutation({
        mutationKey: 'update-store-data',
        mutationFn: updateStoreData,
    })
}
