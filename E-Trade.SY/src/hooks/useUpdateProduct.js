import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../utils/axios-utils";


const updateProduct = async (data) => {
    const response = await request({ url: 'updateProduct', method: "post", data: data });
    return response.data;
}

export function useUpdateProduct(StoreId) {
    const queryClient = useQueryClient();
    return (
        useMutation({
            mutationKey: "update product",
            mutationFn: updateProduct,
            onSuccess: async () => {
                await queryClient.invalidateQueries({ queryKey: [`"shop",${StoreId}`] })
            }
        })
    )
}
