export const fixImageUrl = (url: string) => {
  // eslint-disable-next-line
  return url.replaceAll(/[\[\]'",]/g, '');
};
