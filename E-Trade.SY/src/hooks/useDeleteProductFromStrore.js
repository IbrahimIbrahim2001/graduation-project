import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";
import request from "../utils/axios-utils";

const deleteProductFromStore = async (productId) => {
    const response = await request({ url: "/deleteProductFromStore", method: "post", data: { productId } });
    return response.data;
}

export function useDeleteProductFromStore(StoreId) {
    const querycClient = useQueryClient();
    return useMutation({
        mutationKey: "delete product from store",
        mutationFn: deleteProductFromStore,

        onSettled: async () => {
            await querycClient.invalidateQueries(["shop", StoreId])
        }
    })
}