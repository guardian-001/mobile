import * as SecureStore from 'expo-secure-store';

export async function getItem<T>(key: string): Promise<T | null> {
  const value = await SecureStore.getItemAsync(key);
  return value ? JSON.parse(value) || null : null;
}

export async function setItem<T>(key: string, value: T) {
  SecureStore.setItemAsync(key, JSON.stringify(value));
}

export async function removeItem(key: string) {
  SecureStore.deleteItemAsync(key);
}
