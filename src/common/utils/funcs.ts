import { CONSOLE_COLOR } from '@enums/console-color'

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

/**
 * Окрашивание текста в консоли
 * @param {string} text Строка текста
 * @param {CONSOLE_COLOR} color Цвет текста
 * @returns {string} Окрашенная строка
 */
export const colorize = (
  text: string,
  color: CONSOLE_COLOR = CONSOLE_COLOR.DEFAULT,
): string => `${color}${text}\x1b[0m`
