//react query
import { useQuery } from "@tanstack/react-query";

//utils
import request from "../utils/axios-utils";

const fetchProfileDetails = async () => {
    const response = await request({ url: '/getProfile', method: 'get' });
    // console.log(response.data)
    return response.data;
}

export function useFetchProfileDetails() {
    return useQuery({
        queryKey: ['profile-data'],
        queryFn: fetchProfileDetails,
    })
}