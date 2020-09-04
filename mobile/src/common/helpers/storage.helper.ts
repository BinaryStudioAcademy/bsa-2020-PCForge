import AsyncStorage from '@react-native-community/async-storage';

/** 
 * @throws error which should be handled properly
*/
export const setItem = async (key: string, value: string) => {
    await AsyncStorage.setItem('@' + key, value);
}

/** 
 * @throws error which should be handled properly
*/
export const getItem = async (key: string) => {
    return await AsyncStorage.getItem('@' + key);
}
