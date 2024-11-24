import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchResults } from "../features/searchSlice/searchSlice";
import request from "../utils/axios-utils";


const search = async (productName) => {
    const nameProduct = productName
    const response = await request({
        url: `/searchProduct/${nameProduct}`,
        method: "get",
    });
    console.log(response.data);
    return response.data;
}

export function useSearch() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return useMutation({
        mutationKey: 'search',
        mutationFn: search,
        onSuccess: async (res) => {
            console.log(res);
            dispatch(getSearchResults(res));
            navigate("./search-results", { replace: true });
        }
    })
}