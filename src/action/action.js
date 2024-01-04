import axios from 'axios';
// import { API_CONSTANTS, API_METHODS } from '../constants/Api-Constants';
// import { logout } from '../actions/login';

export const fetchCall = (url, method, payload, callback) => {
    debugger
    // const hasWindow = typeof window !== 'undefined';
    const accessToken = localStorage.getItem('access-token');
    // const uuid = JSON.parse(hasWindow && localStorage.getItem('userData'))?.profile?.userId ?? '';
    // const uvid = hasWindow && (localStorage.getItem('visId') ?? '');
    let options = {};
    const headers = {
        'Content-Type': 'application/json',
        "x-auth-token": accessToken,
        // UUID: uuid,
        // UVID: uvid,
    };
    if (method === 'GET' || method==='DELETE' ) {
        options = {
            method,
            headers,
            url,
        };
    } else {
        options = {
            method,
            data: payload,
            headers,
            url,
        };
    }

    axios(options)
        .then((response) => {
            console.log(response, "axios")
            callback(response);
        })
        .catch((error) => {

            if (error?.response?.status === 400) {
                console.log(error, "axios")
                callback(error.response.data);

                return;
            }
            callback(error);
        });
};

let failedRequests = [];
let isRefreshing = false;


//for Queing the failed request.
function processQueue(error, token = null) {
    failedRequests.forEach(({ promise, config }) => {
        if (error !== null) {
            promise.reject(error);
        } else {
            config.headers.Authorization = token || '';
            axios
                .request(config)
                .then((response) => {
                    promise.resolve(response);
                })
                .catch(() => {

                });
        }
    });
    isRefreshing = false;
    failedRequests = [];
}

export function makeHttpRequestForRefreshToken() {
    // const hasWindow = typeof window !== 'undefined';
    const url = 'http://localhost:5000/refreshtoken';
    // const uuid = JSON.parse(hasWindow && localStorage.getItem('userData'))?.profile?.userId ?? '';
    const refresh_token = "refresh-token";
    return new Promise((resolve, reject) => {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            url,
            data: {
                refreshToken: refresh_token,
            },
        };
        let payload = {
            refreshToken: refresh_token,
            // userId: uuid,
        };

        axios(options)
            .then((response) => {
                if (response?.result?.accessToken) {
                    // localStorage.setItem('loginToken', JSON.stringify(response.data));
                    localStorage.setItem(
                        "access-token",
                        response?.data?.result?.accessToken
                    );

                    resolve(response.data);
                    // } else if (response.response.data.message === 'Token is not active' || response.response.data.message === 'Session not active') {
                    //     logout((res) => {
                    //         if (res.isSuccess) {
                    //             localStorage.clear();
                    //             localStorage.setItem('LoginPop', true);
                    //             if (response.response.data.message === 'Token is not active') {
                    //                 localStorage.setItem('SessionMessage', 'Session expired,Please Login');
                    //             }
                    //             else if (response.response.data.message === 'Session not active') {
                    //                 localStorage.setItem('SessionMessage', 'Session not active,Please Login');
                    //             }
                    //             else {
                    //                 localStorage.setItem('SessionMessage', 'Session expired,Please Login');
                    //             }
                    //             window.open('/', '_self');
                    //         }
                    //         resolve(null);
                    //     }, payload);
                } else {
                    resolve(null);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

axios.interceptors.response.use(
    (response) => response?.data, // Return a successful response back to the calling service
    (error) => {
        const { response, config } = error;
        let errorResponse = null;
        if (!config || !response) {
            if (error.message === 'Network Error') {
                errorResponse = {
                    error: {
                        code: 503,
                        message: error.message,
                    },
                };
            }
            return errorResponse;
        }
        if (response && response.status === 401 && config && !config.__isRetryRequest) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    const options = {
                        promise: {
                            resolve,
                            reject,
                        },
                        config,
                    };
                    failedRequests.push(options);
                }).catch((e) => { return e; });
            }
            isRefreshing = true;

            config.__isRetryRequest = true;
            return makeHttpRequestForRefreshToken()
                .then((response) => {
                    const { config } = error;
                    processQueue(null, response.access_token);
                    return new Promise((resolve, reject) => {
                        config.headers.Authorization = response.access_token;
                        axios
                            .request(config)
                            .then((response) => {
                                resolve(response);
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    });
                })
                .catch(() => {

                });
        }
        // we tried Promise.reject(error) instead below function but its not working as expected
        return new Promise((reject) => {
            reject(error);
        });
    }
);