import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


// import { useSelector } from "react-redux";

function fetchCart(productId) {
    console.log(productId);
    return axios.get("http://localhost:3000/order", { productId });
    //must be => return axios.get(`http://localhost:3000/cart/${userId}`);
}

function mutateCart(productId) {
    return axios.post("http://localhost:3000/order", { productId })
}

function deleteCartItem(id) {
    return axios.delete(`http://localhost:3000/order/${id}`);
}



export function useFetchCartItems() {
    return (
        useQuery({
            queryKey: ["cart"],
            queryFn: fetchCart,
        })
    )
}

export function useMutateCart() {
    return (
        useMutation({
            mutationFn: (productId) => mutateCart(productId)
        })
    )
}

export function useDeletaCartItem() {
    const queryClient = useQueryClient();
    return (
        useMutation({
            mutationFn: (id) => deleteCartItem(id),
            onSuccess: () => queryClient.invalidateQueries("cart")
        })
    )
}