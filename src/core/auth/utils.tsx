import type { User } from '@/api/auth';
import { getItem, removeItem, setItem } from '@/core/storage';

const TOKEN = 'token';
const USER = 'user';
const STATUS = 'status';

export type TokenType = {
  access: string;
  refresh: string;
};

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value);

export const getUser = () => getItem<User>(USER);
export const removeUser = () => removeItem(USER);
export const setUser = (value: User) => setItem<User>(USER, value);

export const getStatus = () => getItem<String>(STATUS);
export const removeStatus = () => removeItem(STATUS);
export const setStatus = (value: String) => setItem<String>(STATUS, value);
