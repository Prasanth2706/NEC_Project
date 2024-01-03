import { fetchCall } from "../action";


export const connectionDetail = (callback, payload) => {
    debugger
    const url = "http://localhost:5000/testconnection";
    return fetchCall(url, 'POST', payload, (response) => {
        console.log(response, "fetch connectiondetail response")
        callback(response);
    });
};
export const saveconnectionDetail = (callback, payload) => {
    debugger
    const url = "http://localhost:5000/saveconnection";
    return fetchCall(url, 'POST', payload, (response) => {
        console.log(response, "fetch saveconnectiondetail response")
        callback(response);
    });
};
