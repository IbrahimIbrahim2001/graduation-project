import { useQuery } from "@tanstack/react-query";

import request from "../utils/axios-utils";

const fetchShopItems = async (id = parseInt(localStorage.getItem('shopId'))) => {
    const res = await request({ url: `/store/${id}`, method: 'get' });
    return res
};

export function useFetchShopItems(id) {
    return useQuery({ queryKey: ["shop", id], queryFn: () => fetchShopItems(id) });
}