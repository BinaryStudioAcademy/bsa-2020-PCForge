import { setItem, getItem } from "./storage.helper";

export const getToken = async () => {
    return await getItem('token');
}

export const setToken = async (token: string) => {
    setItem('token', token);
    return await getItem('token');
}