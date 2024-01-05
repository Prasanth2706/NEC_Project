import { fetchCall } from "../action";

export const toolDetail = (callback, payload) => {
    debugger
    const url = "http://localhost:5000/createjob";
    return fetchCall(url, 'POST', payload, (response) => {
        console.log(response, "fetch tooldetail response")
        callback(response);
    },true);
};

export const gettoolDetail = (callback, payload) => {
    debugger
    const url = "http://localhost:5000/connections?=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE3MDE3NzkyNzYsImV4cCI6MTcwMTc4MDQ3Nn0.xnUqcgP3889NYQ9nkpuQzx5UMz7JzHY_H1XKkLeEs14";
    return fetchCall(url, 'GET', payload, (response) => {
        console.log(response, "fetch getooldetail response")
        callback(response);
    });
};