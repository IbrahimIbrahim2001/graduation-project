import { useQuery } from "@tanstack/react-query";
import request from "../utils/axios-utils";


const fetchShopsItems = async () => {
    const response = await request({ url: '/AllProduct', method: 'get' });
    return response.data;
}

export function useFetchShopsItems() {
    return useQuery({
        queryKey: ['shops-items'],
        queryFn: fetchShopsItems,
    })
}