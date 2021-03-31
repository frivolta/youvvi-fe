export const truncateString = (s: string, l: number) => {
  return s.length > l ? `${s.substring(0, l)}...` : s;
};
