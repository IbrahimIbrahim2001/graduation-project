import { useMutation, useQueryClient } from "@tanstack/react-query";

import request from "../utils/axios-utils";


async function AddNewProduct(productData) {
    const { name, image, price, quantity, storeId, optionalImages = [], Size = "", Color = "", Kind = "", privateNumber } = productData;


    const formData = new FormData();
    formData.append('productName', name);
    formData.append('image', image);
    formData.append('productCount', quantity);
    formData.append('productPrice', price);
    formData.append('Color', Color);
    formData.append('Size', Size);
    formData.append('Kind', Kind);
    formData.append('privateNumber', privateNumber);
    optionalImages.forEach((image) => formData.append('OptionImage', image));

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
        onError: (error) => {
            console.log(error.message)
            addProductError()
        },
    })
}
