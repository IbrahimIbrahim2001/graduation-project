//react query
import { useQuery } from "@tanstack/react-query";

//utils
import request from "../utils/axios-utils";

const fetchProfileDetails = async () => {
    const response = await request({ url: '/', method: 'get' });
    return response.data;
}

export function useFetchProfileDetails() {
    return useQuery({
        queryKey: ['profile-data'],
        queryFn: fetchProfileDetails,
    })
}