import AsyncStorage from '@react-native-community/async-storage';

export const baseURL = 'https://matchmaker-api-dev.herokuapp.com/api/v1';

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@' + key, jsonValue)
    } catch (e) {
        throw new Error(e);
    }
}

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@' + key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        throw new Error(e);
    }
}

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        throw new Error(e);
    }
}