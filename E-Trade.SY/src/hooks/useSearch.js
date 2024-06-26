import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchResults } from "../features/searchSlice/searchSlice";


const search = async (productName) => {
    const nameProduct = productName;
    const response = await axios.post('http://localhost:3000/searchProduct', nameProduct);
    console.log(response.data);
    return response.data;
}

export function useSearch() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return useQuery({
        queryKey: ['search'],
        queryFn: (productName) => search(productName),
        onSuccess: (res) => {
            dispatch(getSearchResults(res));
            navigate("../search-results");
        }
    })
}