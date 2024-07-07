/**
 * Преобразование пути к формату S3
 * @param {path} path Путь к файлу
 * @returns {string} Преобразованный путь
 */
export const toS3Path = (path: string) =>
  path
    .split('/')
    .filter((item) => item.trim().length !== 0)
    .join('/')
