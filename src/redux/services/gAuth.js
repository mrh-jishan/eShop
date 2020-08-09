import { GoogleSignin } from '@react-native-community/google-signin';
import config from '../config';
import { baseURL, clearStorage } from './api';
const axios = require('axios').default;

GoogleSignin.configure(config.auth);

export const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        return await GoogleSignin.signIn();
    } catch (error) {
        throw new Error(error);
    }
}

export const gLogin = async (body) => {
    const { data } = await axios.post(`${baseURL}/auth/gauth`, body);
    return data;
}

export const isSignedIn = async () => {
    return await GoogleSignin.isSignedIn();
}

export const getCurrentUser = async () => {
    return GoogleSignin.getCurrentUser();
}

export const getTokens = () => {
    return GoogleSignin.getTokens();
}

export const signOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        await clearStorage();
    } catch (error) {
        throw new Error(error);
    }
};