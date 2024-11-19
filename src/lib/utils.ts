import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isProd = import.meta.env.PROD;
export const isDev = import.meta.env.DEV;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRootCssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name);
}
