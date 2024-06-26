import { useQuery } from "@tanstack/react-query";

import request from "../utils/axios-utils";

const fetchShopItems = (id = parseInt(localStorage.getItem('shopId'))) => {
    return request({ url: `/store/${id}`, method: 'get' });
};

export function useFetchShopItems(id) {
    return useQuery({ queryKey: ["shop", id], queryFn: () => fetchShopItems(id) });
}