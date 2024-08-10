import { useMutation } from "@tanstack/react-query";


import request from "../utils/axios-utils";

const rateProduct = async (data) => {
    const response = await request({ url: "/rate", method: "post", data: data });
    return response.data;
}


export function useRateProduct() {
    return useMutation({
        mutationKey: "rate-product",
        mutationFn: rateProduct,
    })
}