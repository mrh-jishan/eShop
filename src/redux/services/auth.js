import { baseURL, clearStorage, getData, storeData } from './api';

const axios = require('axios').default;

export const login = async (user) => {
    const { data } = await axios.post(`${baseURL}/auth/login`, user);
    return data;
}

export const register = async (user) => {
    const { data } = await axios.post(`${baseURL}/auth/register`, user);
    return data;
}

export const signOut = async () => {
    await clearStorage();
}
export const me = async () => {
    const accessToken = await getAccessToken();
    const headers = {
        'Content-Type': 'application/json',
        'token': accessToken
    }
    const { data } = await axios.get(`${baseURL}/users/me`, {
        headers: headers
    });
    return data;
}

export const getAccessToken = async () => {
    const token = await getData('token')
    return token.accessToken;

}
export const getRefreshToken = async () => {
    const token = await getData('token');
    return token.refreshToken;
}

export const saveToken = async (token) => {
    await storeData('token', token);
}
