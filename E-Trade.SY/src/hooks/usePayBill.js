import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../utils/axios-utils";

const payBill = async (data) => {
    try {
        const response = await request({ url: "/paid", method: "post", data: data });
        return response.data;
    } catch (error) {
        throw new Error(`Error in Payment: ${error.message}`);
    }
}



export function usePayBill(onSuccess, onError) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: "Pay Bill",
        mutationFn: payBill,
        onSettled: (res) => {
            queryClient.invalidateQueries(["cart"])
            onSuccess(res);
        },
        onError,
    })
}