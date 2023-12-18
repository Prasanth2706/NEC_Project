/* eslint-disable no-else-return */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
import { SessionStorage } from '../utils/storage.native';
import { LocalSessionKey } from '../constants/app-constants';
import { BASE_URL } from '../constants/api-constants';
import DeviceInfo from 'react-native-device-info';
import * as Global from '../../Constants/GLOBAL';
const axios = require('axios');
const refreshAxios = require('axios');

const SHA256 = require('crypto-js/sha256');

const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
const METHOD_PUT = 'PUT';
const METHOD_PATCH = 'PATCH';
const METHOD_DELETE = 'DELETE';

let failedRequestQueue = [];
let isRefreshing = false;

// const getHeaders = async (isReturnAccessToken = true, isUpload, end_url, payload, method) => {
// const user_id = await SessionStorage.get(LocalSessionKey.USER_ID);
// const outlet_id = await SessionStorage.get(LocalSessionKey.OUTLET_ID);
// const orderType = await SessionStorage.get(LocalSessionKey.ORDER_TYPE);
// // await SessionStorage.get(LocalSessionKey.ORDER_TYPE);
// const platform = await SessionStorage.get(LocalSessionKey.PLATFORM);
// const appVersion = await SessionStorage.get(LocalSessionKey.APP_VERSION);
// const timestamp = new Date().getTime().toString();
// const authorization = await SessionStorage.get(LocalSessionKey.TOKEN);
// const deviceBrand = DeviceInfo.getBrand();
// const deviceModel = DeviceInfo.getModel();

// let device_name = '';

// const deviceVersion = DeviceInfo.getSystemVersion();

// DeviceInfo.getDeviceName().then((deviceName) => {
// device_name = JSON.stringify(deviceName);
// });
// const headers = {
// 'Content-Type': 'application/json',
// userId: user_id || '0',
// outlet_id: outlet_id || 0,
// type: orderType,
// platform: platform,
// appVersion: appVersion,
// timestamp: timestamp,
// authorization: authorization || '',
// 'Access-Control-Allow-Origin': '*',
// deviceName: device_name,
// deviceBrand: deviceBrand,
// deviceModel: deviceModel,
// osVersion: deviceVersion,
// app_type: 'app',
// device: DeviceInfo.isTablet() ? 'tablet' : 'mobile',
// };

// if (isUpload) delete headers['Content-Type'];
// if (method !== 'GET' && authorization) {
// const encryptionkeyStr =
// authorization +
// timestamp +
// user_id +
// end_url +
// (Object.keys(payload).length === 0 && payload.constructor === Object
// ? ''
// : JSON.stringify(payload).replace(/ /g, ''));
// headers.encryptionkey = SHA256(encryptionkeyStr).toString();
// } else if (authorization) {
// headers.encryptionkey = SHA256(
// authorization + timestamp + user_id + end_url.split('?')[0]
// ).toString();
// }
// // console.log(`Headers --- ${JSON.stringify(headers)}`);
// return headers;
// };

const processFailedRequestQueue = (error, token = null) => {
    failedRequestQueue.forEach((promise) => {
        if (error) {
            console.log('error:', error);
            promise.reject(error);
        } else {
            promise.resolve(token);
        }
    });
    failedRequestQueue = [];
};

// Response interceptor for API calls Response
axios.interceptors.response.use(
    (response) => {
        console.log('Interceptor Response ** Success ** for API: ', response.config.url);
        // Return all success response
        return response;
    },
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
        // Return any error which is not due to authentication back to the calling service

        if ((response?.status == 401 || response?.status == 403) && !config?.__isRetryRequest) {
            if (isRefreshing) {
                try {
                    return new Promise(function (resolve, reject) {
                        failedRequestQueue.push({ resolve, reject });
                    })
                        .then((token) => {
                            // Call Success ---> 1
                            config.headers.authorization = token;
                            return axios.request(config);
                        })
                        .catch((err) => {
                            // Call error ---> 2
                            return Promise.reject(err);
                        });
                } catch (e) {
                    console.log('error interceptors==>', e);
                    return e;
                }
            }
            isRefreshing = true;
            config.__isRetryRequest = true;
            // Try request again with new token
            // console.log('camehere=== outside', {}, config, config.__isRetryRequest);
            return new Promise(function (resolve, reject) {
                // Get new refresh token
                getNewRefreshTokenCall({ resolve, reject }, config);
            });
        }
        return new Promise((resolve, reject) => {
            // console.log('Interceptor Response: ', error.response);
            reject(error);
        });
    }
);

const getNewRefreshTokenCall = async (promiseObj, config) => {
    const url = BASE_URL + '/api/v1/user/refreshToken';
    const payload = {
        refresh_token: await SessionStorage.get(LocalSessionKey.REFRESH_TOKEN),
    };
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            url,
            data: JSON.stringify(payload),
        };
        refreshAxios(options)
            .then((res) => {
                if (res && res.data && res.data.content) {
                    const newAccessToken = res.data.content.token;
                    config.headers.authorization = newAccessToken;
                    SessionStorage.set(LocalSessionKey.TOKEN, res.data.content.token);
                    SessionStorage.set(LocalSessionKey.REFRESH_TOKEN, res.data.content.refresh_token);
                    console.log('refresh Token response==>', res.data.content.token);
                    isRefreshing = false;
                    processFailedRequestQueue(null, newAccessToken);
                    promiseObj.resolve(axios(config));
                }
            })
            .catch(async (err) => {
                console.log('Refresh AuthLogic API Failed:', err);
                processFailedRequestQueue(err, null);
                Global.isUserLoggedIn = false;
                Global.mobileNo = '';
                Global.userDetails = '';
                await SessionStorage.remove(LocalSessionKey.MOBILE_NO);
                await SessionStorage.remove(LocalSessionKey.USER_DETAIL);
                await SessionStorage.remove(LocalSessionKey.USER_DATA);
                await SessionStorage.remove(LocalSessionKey.USER_ID);
                await SessionStorage.remove(LocalSessionKey.TOKEN);
                await SessionStorage.remove(LocalSessionKey.REFRESH_TOKEN);
                Global.token = '';
                Global.refreshToken = '';
                promiseObj.reject(err);
            })
            .finally(() => {
                isRefreshing = false;
            });
    } catch (error) {
        reject(error);
    }
};

// const makeHttpRequestForApp = async (endPoint_url, method, payload, isUpload) => {
// const url = BASE_URL + endPoint_url;
// const headers = await getHeaders(false, isUpload, endPoint_url, payload, method);

// return new Promise((resolve, reject) => {
// try {
// if (url === null || url === undefined || url === '') {
// reject(new Error('URL not present.'));
// } else {
// let options = {};

// if (method === 'GET') {
// options = {
// method,
// url,
// headers,
// otherdata: { isUpload, endPoint_url, payload, method },
// };
// } else if (isUpload) {
// options = {
// method, 
// headers,
// url,
// data: payload,
// otherdata: { isUpload, endPoint_url, payload, method },
// };
// } else {
// options = {
// method,
// headers,
// url,
// data: JSON.stringify(payload),
// otherdata: { isUpload, endPoint_url, payload, method },
// };
// }
// console.log(`AJAX OPTIONS ***** - ${JSON.stringify(options)}`);
// axios(options)
// .then((response) => {
// if (response.error && response.error.code === 503) {
// reject({
// error: true,
// message: response.error.message,
// code: 503,
// });
// } else {
// resolve(response.data);
// }
// })
// .catch((error) => {
// if (error && error.response && error.response.status === 400) {
// resolve(error.response.data);
// return;
// }
// resolve(error);
// });
// }
// } catch (error) {
// reject(error);
// }
// });
// };

// export async function get(url, payload = {}) {
// return makeHttpRequestForApp(url, METHOD_GET, payload);
// }

// export async function post(url, payload = {}) {
// return makeHttpRequestForApp(url, METHOD_POST, payload);
// }

// export async function upload(url, payload = {}) {
// return makeHttpRequestForApp(url, METHOD_POST, payload, true);
// }

// export async function put(url, payload = {}) {
// return makeHttpRequestForApp(url, METHOD_PUT, payload);
// }

// export async function patch(url, payload = {}) {
// return makeHttpRequestForApp(url, METHOD_PATCH, payload);
// }

// export async function del(url, payload = {}) {
// return makeHttpRequestForApp(url, METHOD_DELETE, payload);
// }

// export async function getAll(urls, payload = {}) {
// return Promise.all(urls.map((url) => makeHttpRequestForApp(url, METHOD_GET, payload))).then(
// (data) => {
// return data;
// }
// );
// }

// export async function postAll(urls, payload = {}) {
// return Promise.all(
// payload.data.map((payl) => makeHttpRequestForApp(urls, METHOD_POST, { data: payl }))
// ).then((data) => {
// return data;
// });
// }



// 1. make a separate function call for handnling the failedRequestQueue in a seperate file and import in every api call componennt
// 2. based on the different error status code, handle the request and push to the failedRequestQueue function
