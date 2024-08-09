import { create } from 'zustand';

import type { User } from '@/api/auth';

import { createSelectors } from '../utils';
import type { TokenType } from './utils';
import {
  getToken,
  getUser,
  removeStatus,
  removeToken,
  removeUser,
  setStatus,
  setToken,
  setUser,
} from './utils';
type SignIn = {
  token: TokenType | null;
  user: User | null;
};
interface AuthState {
  token: TokenType | null;
  user: User | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: ({ token, user }: SignIn) => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  user: null,
  signIn: ({ token, user }) => {
    if (token && user) {
      setToken(token);
      setUser(user);
      setStatus('signIn');
      set({ status: 'signIn', token, user });
    }
  },
  signOut: () => {
    removeToken();
    removeUser();
    removeStatus();
    set({ status: 'signOut', token: null });
  },
  hydrate: async () => {
    try {
      const token = await getToken();
      const user = await getUser();
      if (token !== null) {
        get().signIn({ token, user });
      } else {
        get().signOut();
      }
    } catch (e) {
      signOut();
    }
  },
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = ({ token, user }: SignIn) =>
  _useAuth.getState().signIn({ token, user });
export const hydrateAuth = () => _useAuth.getState().hydrate();
