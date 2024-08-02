//react query
import { useMutation } from "@tanstack/react-query";

//utils
import request from "../utils/axios-utils";


const updateProfileDetails = async (data) => {
    const response = await request({ url: '/updateProfile', method: 'post', data: data });
    return response.data;
}

export function useUpdateProfileDetails() {
    return useMutation({
        mutationKey: 'update-profile-data',
        mutationFn: updateProfileDetails,
    })
}


// export const getProfileData = async () => {
//     const response = await request({ url: '/getProfile', method: 'get' });
//     return response.data;
// }