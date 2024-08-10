import { useMutation } from "@tanstack/react-query";
import request from "../utils/axios-utils";
import { useDispatch } from "react-redux";
import { getAprioriResults } from "../features/aprioriSlice/apriori";

const fetchApriori = async (productId) => {
    const response = await request({ url: `/Apri/${productId}`, method: "get", });
    return response.data;
}

export function useApriori() {
    const dispatch = useDispatch();
    return useMutation({
        mutationKey: 'apriori',
        mutationFn: fetchApriori,
        onSuccess: (data) => {
            dispatch(getAprioriResults(data));
        }
    })
}