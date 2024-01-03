import { fetchCall } from "../action";


export const jobsTable = (callback, payload) => {
  debugger
  const url = "http://localhost:5000/listjobs";
  return fetchCall(url, 'GET', payload, (response) => {
    console.log(response, "fetch jobs response")
    callback(response);
  });
};