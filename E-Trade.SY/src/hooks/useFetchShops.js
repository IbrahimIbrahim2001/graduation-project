import { useQuery } from "@tanstack/react-query";

import request from "../utils/axios-utils";

const fetchShops = () => {
    return request({ url: "/stores", method: 'get' });
}


export default function useFetchShops() {
    return useQuery({
        queryKey: ["shops"],
        queryFn: () => fetchShops(),
    })
}