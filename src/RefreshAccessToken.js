// import axios from "axios";
// const ApiRefreshAccess = () => {

//     let failedRequestQueue = [];
//     let isRefreshing = false;

//     const processFailedRequestQueue = (error, token = null) => {
//         failedRequestQueue.forEach((promise) => {
//             if (error) {
//                 console.log('error:', error);
//                 promise.reject(error);
//             } else {
//                 promise.resolve(token);
//             }
//         });
//         failedRequestQueue = [];
//     };
//     axios.interceptors.response.use(
//         (response) => {
//             console.log('Interceptor Response ** Success ** for API: ', response.config.url);
//             // Return all success response
//             return response;
//         },
//         (error) => {
//             const { response, config } = error;
//             let errorResponse = null;
//             if (!config || !response) {
//                 if (error.message === 'Network Error') {
//                     errorResponse = {
//                         error: {
//                             code: 503,
//                             message: error.message,
//                         },
//                     };
//                 }
//                 return errorResponse;
//             }

//             // if ((response?.status == 401 || response?.status == 403)) {
//             //     if (isRefreshing) {
//             //         try {
//             //             return new Promise(function (resolve, reject) {
//             //                 failedRequestQueue.push({ resolve, reject });
//             //             })
//             //                 .then((token) => {
//             //                     // Call Success ---> 1
//             //                     config.headers.authorization = token;
//             //                     return axios.request(config);
//             //                 })
//             //                 .catch((err) => {
//             //                     // Call error ---> 2
//             //                     return Promise.reject(err);
//             //                 });
//             //         } catch (e) {
//             //             console.log('error interceptors==>', e);
//             //             return e;
//             //         }
//             //     }
//             //     isRefreshing = true;
//             //     config.__isRetryRequest = true;
//             //     // Try request again with new token
//             //     // console.log('camehere=== outside', {}, config, config.__isRetryRequest);
//             //     return new Promise(function (resolve, reject) {
//             //         // Get new refresh token
//             //         getNewRefreshTokenCall({ resolve, reject }, config);
//             //     });
//             // }
//             // return new Promise((resolve, reject) => {
//             //     // console.log('Interceptor Response: ', error.response);
//             //     reject(error);
//             // });
//         }
//     );



//     const getNewRefreshTokenCall = async (promiseObj, config) => {
//         const url = 'http://localhost:5000/refreshtoken';
//         const payload = {
//             refresh_token: await localStorage.get('refresh-token'),
//         };
//         try {
//             const options = {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 url,
//                 data: JSON.stringify(payload),
//             };
//             refreshAxios(options)
//                 .then((res) => {
//                     if (res && res.data && res.data.content) {
//                         const newAccessToken = res.data.content.token;
//                         config.headers.authorization = newAccessToken;
//                         localStorage.set('access-token', res.data.content.token);
//                         localStorage.set('refresh-token', res.data.content.refresh_token);
//                         console.log('refresh Token response==>', res.data.content.token);
//                         isRefreshing = false;
//                         processFailedRequestQueue(null, newAccessToken);
//                         promiseObj.resolve(axios(config));
//                     }
//                 })
//                 .catch(async (err) => {
//                     console.log('Refresh AuthLogic API Failed:', err);
//                     processFailedRequestQueue(err, null);
//                     // Global.isUserLoggedIn = false;
//                 })
//                 .finally(() => {
//                     isRefreshing = false;
//                 });
//         } catch (error) {
//             reject(error);
//         }
//     };
// }


// export default ApiRefreshAccess