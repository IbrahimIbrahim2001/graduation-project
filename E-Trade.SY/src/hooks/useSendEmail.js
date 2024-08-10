import { useMutation } from "@tanstack/react-query";
import request from "../utils/axios-utils";
const sendEmail = async (data) => {
    console.log(data);
    const response = await request({ url: "/sendToken", method: "post", data: data })
    return response.data;
}

export function useSendEmail() {
    return useMutation({
        mutationKey: "send-email",
        mutationFn: sendEmail,
    })
}