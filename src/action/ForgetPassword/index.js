import { fetchCall } from "../action";


export const forgetPassword = (callback, payload) => {
  debugger
  const url = "http://localhost:5000/forgotpassword";
  return fetchCall(url, 'POST', payload, (response) => {
    console.log(response, "fetch jobs response")
    callback(response);
  });
};