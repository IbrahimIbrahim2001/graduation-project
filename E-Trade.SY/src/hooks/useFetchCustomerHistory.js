import { useQuery } from "@tanstack/react-query";

import request from "../utils/axios-utils";

const fetchCustomerHistory = async () => {
    const response = await request({ url: "/history", method: "get" });
    return response.data;
}




export function useFetchCustomerHistory() {
    return (
        useQuery({
            queryKey: ["customer-history"],
            queryFn: fetchCustomerHistory,
        })
    )
}
