// import axiosInstance from "./apiInstance";

// const authService = {
// refreshToken: async () => {
// try {
// const refreshToken = localStorage.getItem('refresh-Token');
// const response = await axiosInstance.post('/refresh-token', { refreshToken });
// const { accessToken, newRefreshToken } = response.data;

// // Update the access token and refresh token in localStorage
// localStorage.setItem('access-token', accessToken);
// localStorage.setItem('refresh-Token', newRefreshToken);

// // Retry the original API request with the new access token
// return true;
// } catch (error) {
// console.error('Error refreshing token:', error);
// // Handle token refresh error (e.g., logout the user)
// return false;
// }
// },
// };

// export default authService;