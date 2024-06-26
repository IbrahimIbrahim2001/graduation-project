import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import request from "../utils/axios-utils";


async function fetchCart() {
    const response = await axios.get(`http://localhost:3000/MyWallet`);
    return response.data;
}

async function mutateCart(productId) {
    try {
        const res = await axios.post("http://localhost:3000/order", { productId });
        // const res = await request({ url: "/order", method: 'post', data: { productId } })
        return res.data;
    } catch (error) {
        throw new Error(`Error during sign-up: ${error.message}`);
    }
}

export function useMutateCart() {
    const queryClient = useQueryClient();
    return (
        useMutation({
            mutationKey: "add to cart",
            mutationFn: mutateCart,
            onSuccess: (res) => {
                console.log(res);
                queryClient.invalidateQueries("cart");
            },
            onError: (error) => console.log(error)
        })
    )
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

export function useDeletaCartItem() {
    const queryClient = useQueryClient();
    return (
        useMutation({
            mutationFn: (id) => deleteCartItem(id),
            onSuccess: () => queryClient.invalidateQueries("cart")
        })
    )
}