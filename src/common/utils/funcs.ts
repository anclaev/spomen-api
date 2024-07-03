export const toS3Path = (path: string) =>
  path
    .split('/')
    .filter((item) => item.trim().length !== 0)
    .join('/')
