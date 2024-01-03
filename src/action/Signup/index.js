import { fetchCall } from "../action";


export const signUp = (callback, payload) => {
    debugger
    const url = "http://localhost:5000/signup";
    return fetchCall(url, 'POST', payload, (response) => {
        console.log(response, "fetch signup response")
        callback(response);
    });
};