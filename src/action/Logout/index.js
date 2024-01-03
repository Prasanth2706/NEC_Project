import { fetchCall } from "../action";


export const logOut = (callback, payload) => {
  debugger
  const url = "http://localhost:5000/logout";
  return fetchCall(url, 'POST', payload, (response) => {
    console.log(response, "fetch response")
    callback(response);
  });
};