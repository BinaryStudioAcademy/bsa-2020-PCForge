export enum TokenType {
  simple = 'simple',
  google = 'google',
}

const keyToken = 'access_token';
const keyTokenType = 'access_token_type';

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
  window.localStorage.removeItem(keyTokenType);
};

export const getTokenType = (): TokenType => {
  return (window.localStorage.getItem(keyTokenType) || TokenType.simple) as TokenType;
};

export const setTokenType = (tokenType: TokenType): void => {
  window.localStorage.setItem(keyTokenType, tokenType);
};
