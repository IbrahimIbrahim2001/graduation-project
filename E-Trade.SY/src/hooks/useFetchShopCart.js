import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { deleteAllCartItemsForBadgeContent, deleteCartItemForBadgeContent } from "../features/cartSlice/cartSlice";
import request from "../utils/axios-utils";


// api response functions
export const fetchCart = async () => {
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
const deleteAllCartItems = async () => {
    return request({ url: "/deleteCard", method: "post" })
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
            onSuccess: (res) => {
                if (res !== undefined) {
                    queryClient.invalidateQueries({ queryKey: ["cart"] });
                }
            },
            onError: (error) => {
                console.log(error)
            },
            onSettled: (res) => {
                if (res.message) {
                    onSuccessAddToCart(true);
                }
            }
        })
    );
}

export function useChangeQuantity(onSuccessAddToCart) {
    const queryClient = useQueryClient();
    return (
        useMutation({
            mutationKey: ['change item quantity'],
            mutationFn: changeQuantity,
            onMutate: async (data) => {
                await queryClient.cancelQueries(["cart"]);
                const previousData = queryClient.getQueryData(["cart"]);
                const updatedItemIndex = previousData.order.findIndex(item => item.id === data.orderId);
                if (updatedItemIndex !== -1) {
                    const updatedCart = { ...previousData };
                    if (data.signal) {
                        updatedCart.order[updatedItemIndex].quantity++;
                    }
                    onSuccessAddToCart(data.signal);
                    queryClient.setQueryData(["cart"], updatedCart);
                }

                return { previousData };
            },
            onError: (_error, _data, context) => {
                queryClient.setQueryData(['cart'], context.data);
            },
            onSettled: (res) => {
                if (res !== 'Success') {
                    onSuccessAddToCart(false);
                }
                queryClient.invalidateQueries({ queryKey: ['cart'] });
            }
        })
    );
}

export function useDeleteCartItem() {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    return (
        useMutation({
            mutationKey: "delete item from cart",
            mutationFn: deleteCartItem,
            onMutate: async (data) => {
                await queryClient.cancelQueries(["cart"]);
                const previousData = queryClient.getQueryData(["cart"]);
                if (previousData) {
                    queryClient.setQueryData(["cart"], previousData.order.filter((ele) => ele.productId !== data));
                }
                // return { previousData };
            },
            onError: (_error, _data, context) => {
                queryClient.setQueryData(['cart'], context.data);
            },
            onSettled: () => {
                queryClient.invalidateQueries({ queryKey: ['cart'] })
                const cart = queryClient.getQueryData(["cart"]);
                dispatch(deleteCartItemForBadgeContent(cart));
            },
        })
    );
}
export function useDeleteAllCartItems() {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    return useMutation({
        mutationKey: 'delete all items',
        mutationFn: deleteAllCartItems,
        onMutate: async () => {
            await queryClient.cancelQueries(["cart"]);
            const previousData = queryClient.getQueryData(["cart"]);
            queryClient.setQueryData(["cart"], []);
            dispatch(deleteAllCartItemsForBadgeContent())
            return { previousData };
        },
        onError: (context) => {
            queryClient.setQueryData(["cart"], context.previousData);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            dispatch(deleteAllCartItemsForBadgeContent())
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['cart']);
        }
    })
}