export enum LoginType {
  simple = 'simple',
  google = 'google',
}

const keyToken = 'access_token';
const keyLoginType = 'login_type';

export const getToken = (): string | null => {
  return window.localStorage.getItem(keyToken);
};

export const getTokenSync = (): string | null => {
  return window.localStorage.getItem(keyToken);
};

export const setToken = async (token: string): Promise<void> => {
  window.localStorage.setItem(keyToken, token);
};

export const clearToken = async (): Promise<void> => {
  window.localStorage.removeItem(keyToken);
  window.localStorage.removeItem(keyLoginType);
};

export const getLoginType = (): LoginType => {
  return (window.localStorage.getItem(keyLoginType) || LoginType.simple) as LoginType;
};

export const setLoginType = (loginType: LoginType): void => {
  window.localStorage.setItem(keyLoginType, loginType);
};
