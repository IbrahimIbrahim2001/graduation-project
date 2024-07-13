import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import request from "../utils/axios-utils";

// api response functions
const fetchCart = async () => {
    try {
        const response = await request({ url: '/MyWallet', method: 'get' });
        return response.data;
    } catch (error) {
        throw new Error(`Error during fetching: ${error.message}`);
    }
}

const mutateCart = async (productId) => {
    try {
        const res = await request({ url: "/order", method: 'post', data: { productId } });
        return res.data;
    } catch (error) {
        throw new Error(`Error during mutation: ${error.message}`);
    }
}

const changeQuantity = async (data) => {
    try {
        const { orderId, signal } = data;
        const res = await request({ url: '/changeQuantity', method: 'post', data: { orderId, signal } });
        return res.data;
    } catch (error) {
        throw new Error(`Error during change quantity: ${error.message}`);
    }
}

const deleteCartItem = async (productId) => {
    const response = await request({ url: "/deleteProductFromCard", method: 'post', data: { productId } })
    return response.data;
}

// custom hooks
export function useFetchCartItems() {
    return (
        useQuery({
            queryKey: ["cart"],
            queryFn: fetchCart,
        })
    );
}

export function useMutateCart(onSuccessAddToCart) {
    const queryClient = useQueryClient();
    return (
        useMutation({
            mutationKey: "add to cart",
            mutationFn: mutateCart,
            onSuccess: () => {
                // this function will send a notification with a msg
                queryClient.invalidateQueries({ queryKey: ["cart"] });
                onSuccessAddToCart();
            },
        })
    );
}

export function useChangeQuantity() {
    const queryClient = useQueryClient();
    return (
        useMutation({
            mutationKey: ['change item quantity'],
            mutationFn: changeQuantity,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['cart'] });
            },
            // onMutate: async (data) => {
            //     await queryClient.cancelQueries(["cart"]);
            //     const previousData = queryClient.getQueryData(["cart"]);
            //     // queryClient.setQueryData(["cart"], (oldData) => [...oldData, data.orderId]);
            //     // use the data and fint the  element with the id of data.orderId and then update the quantity depending on data.signal
            //     // console.log(data);
            //     console.log(previousData);
            //     return { previousData };
            // },
            // onError: (_error, _data, context) => {
            //     queryClient.setQueryData(['cart'], context.data);
            // },
            // onSettled: () => {
            //     queryClient.invalidateQueries({ queryKey: ['cart'] });
            // },
        })
    );
}

export function useDeleteCartItem() {
    const queryClient = useQueryClient();
    return (
        useMutation({
            mutationFn: deleteCartItem,
            onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
        })
    );
}