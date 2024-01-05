import { fetchCall } from "../action";


export const connectionTable = (callback, payload) => {
    debugger
    const url = "http://localhost:5000/connections?=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE3MDE3NzkyNzYsImV4cCI6MTcwMTc4MDQ3Nn0.xnUqcgP3889NYQ9nkpuQzx5UMz7JzHY_H1XKkLeEs14";
    return fetchCall(url, 'GET', payload, (response) => {
        console.log(response, "fetch connection response")
        callback(response);
    });
};

export const connectionTableUpdate = (callback, payload, queryParams) => {
    // const url = `${API_CONSTANTS.GETAREA}/${queryParams}`;
    // debugger
    console.log(queryParams, 'table queryparams')

    const url = `http://localhost:5000/updateconnection/${queryParams}`;
    return fetchCall(url, 'PUT', payload, (response) => {
        console.log(response, "fetch connection response")
        callback(response);
    });
};

export const connectionTableDelete = (callback, payload, queryParams) => {
    console.log(queryParams, 'queryparams')
    // const url = `${API_CONSTANTS.GETAREA}/${queryParams}`;
    const url = `http://localhost:5000/deleteconnection/${queryParams}`;
    return fetchCall(url, 'DELETE', payload, (response) => {
        console.log(response, "fetch connection response")
        callback(response);
    });
};