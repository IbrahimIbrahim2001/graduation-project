import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function AddNewProduct(productData) {
    return axios.post("back-end route", productData)
}


export function useAddProducts() {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: ["add product"],
        queryFn: (productData) => AddNewProduct(productData),
        onSuccess: () => queryClient.invalidateQueries("add product")

    })
}