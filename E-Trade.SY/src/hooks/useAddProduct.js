import { useMutation, useQueryClient } from "@tanstack/react-query";

import request from "../utils/axios-utils";


async function AddNewProduct(productData) {
    const { name, image, price, quantity, storeId } = productData;
    // const imageFile = new File([image], 'filename', { type: 'image/jpeg' });
    const formData = new FormData();
    formData.append('productName', name);
    formData.append('image', image);
    formData.append('productCount', quantity);
    formData.append('productPrice', price);

    try {
        const response = await request({ url: `/AddProduct/${storeId}`, method: 'post', data: formData });
        return response.data;
    } catch (error) {
        throw new Error(`Error adding product: ${error.message}`);
    }
}



export function useAddProduct(addProductSuccesfully, addProductError
) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: "add product",
        mutationFn: AddNewProduct,
        onSuccess: () => {
            queryClient.invalidateQueries("shops-items");
            addProductSuccesfully();
        },
        onError: () => addProductError(),
    })
}
