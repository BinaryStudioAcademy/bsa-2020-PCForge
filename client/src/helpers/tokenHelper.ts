const keyToken = 'access_token';

export const getToken = async (): Promise<string | null> => {
  return window.localStorage.getItem(keyToken);
};

export const setToken = async (token: string): Promise<void> => {
  window.localStorage.setItem(keyToken, token);
};
