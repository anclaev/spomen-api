import * as sharp from 'sharp'

/**
 * Конфигурация sharp
 */
const config = {
  jpeg: { quality: 60 },
  jpg: { quality: 60 },
  png: { compressionLevel: 9 },
  webp: {
    quality: 20,
    alphaQuality: 20,
    force: false,
  },
}

/**
 * Конвертирование изображения в WebP
 * @param {Buffer} file Файл в буфере
 * @param {boolean} compress Флаг на сжатие
 * @returns {Buffer} Обработанный файл
 */
export const toWebp = async (
  file: Buffer,
  compress: boolean,
): Promise<Buffer> => {
  const image = sharp(file)
  const { format, width, height } = await image.metadata()

  if (compress && (width! > 1000 || height! > 1000)) {
    image.resize(Math.round(width! / 4), Math.round(height! / 4))
  }

  let formattedImage = null

  switch (format) {
    case 'jpeg': {
      formattedImage = image.jpeg(config['jpeg']).webp(config['webp'])
      break
    }

    case 'jpg': {
      formattedImage = image.png(config['jpeg']).webp(config['webp'])
      break
    }

    case 'png': {
      formattedImage = image.png(config['png']).webp(config['webp'])
      break
    }

    default: {
      formattedImage = image.webp(config['webp'])
    }
  }

  return await formattedImage.toBuffer()
}
