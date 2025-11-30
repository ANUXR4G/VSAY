// utils/isMobile.ts
export const isMobile =
  typeof window !== "undefined"
    ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    : false;
