import { useQuery } from "@tanstack/react-query";
import request from "../utils/axios-utils";


const fetchNotification = async () => {
    const response = await request({ url: "/Noti", method: "get" });
    return response.data;
}


export function useFetchSellerNotification() {
    return (
        useQuery({ queryKey: ['seller-notification'], queryFn: fetchNotification })
    )
}
