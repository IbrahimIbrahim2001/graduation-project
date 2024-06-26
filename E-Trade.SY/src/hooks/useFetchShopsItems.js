import { useQuery } from "@tanstack/react-query";
import request from "../utils/axios-utils";


const fetchShopsItems = () => {
    return request({ url: '/AllProduct', method: 'get' });
}

export function useFetchShopsItems() {
    return useQuery({
        queryKey: ['shops-items'],
        queryFn: fetchShopsItems,
    })
}