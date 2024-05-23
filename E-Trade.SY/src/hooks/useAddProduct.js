import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// const axiosInstance = axios.create();

async function AddNewProduct(productData) {
    const { name, image, price, quantity, storeId } = productData;
    console.log(productData);
    // const imageFile = new File([image], 'filename', { type: 'image/jpeg' });
    const formData = new FormData();
    formData.append('productName', name);
    formData.append('image', image);
    formData.append('productCount', quantity);
    formData.append('productPrice', price);

    try {
        const response = await axios.post(
            `http://localhost:3000/AddProduct/${storeId}`,
            formData,
        );
        return response.data;
    } catch (error) {
        throw new Error(`Error adding product: ${error.message}`);
    }
}



export function useAddProduct() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: "add product",
        mutationFn: AddNewProduct,
        onSuccess: () => queryClient.invalidateQueries("add product"),
        onError: (error) => console.log(error.message),
    })
}
