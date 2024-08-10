import { useMutation } from "@tanstack/react-query";
import request from "../utils/axios-utils";
const resetPassword = async (data) => {
    console.log(data);
    const response = await request({ url: `/changePassword/${data.token}`, method: "post", data: data })
    return response.data;
}

export function useResetPassword() {
    return useMutation({
        mutationKey: "reset password",
        mutationFn: resetPassword,
    })
}