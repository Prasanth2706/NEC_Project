// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:5000/refreshtoken',
// });


// axiosInstance.interceptors.request.use(
//     (config) => {
//         const accessToken = localStorage.getItem('access-token');
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${'access-token'}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalRequest = error.config;
//         // Handle token expiration and retry the request with a refreshed token
//         if (error.status === 400 || error.status === 500 || error.status === 401 || error.status === 404 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             const isRefreshSuccessful = await authService.refreshToken();
//             if (isRefreshSuccessful) {
//                 return axiosInstance(originalRequest);
//             }
//         }

//         return Promise.reject(error);
//     }
// );

// export default axiosInstance;
