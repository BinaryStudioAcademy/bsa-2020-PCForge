const keyToken = 'access_token';

export const getToken = (): string | null => {
  return window.localStorage.getItem(keyToken);
};

export const setToken = (token: string): void => {
  window.localStorage.setItem(keyToken, token);
};

export const removeToken = (): void => {
  window.localStorage.removeItem(keyToken);
};
