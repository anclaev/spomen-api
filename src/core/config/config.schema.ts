import * as Joi from 'joi'

/**
 * Схема конфигурации
 */
const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('local', 'development', 'staging', 'production', 'test')
    .default('local'),
  COOKIE_SECRET: Joi.string().required(),
  PORT: Joi.number().default(3000),
  ORIGIN: Joi.string().default('localhost'),
  DOMAIN: Joi.string().default('localhost'),
  DATABASE_URL: Joi.string().required(),
  VK_API_URL: Joi.string().required(),
  VK_API_VERSION: Joi.string().default('5.131'),
  VK_ID_ACCESS_KEY: Joi.string(),
  VK_ID_SERVICE_KEY: Joi.string(),
  ACCESS_TOKEN_SECRET: Joi.string().required(),
  ACCESS_TOKEN_EXPIRATION: Joi.string().required(),
  REFRESH_TOKEN_SECRET: Joi.string().required(),
  REFRESH_TOKEN_EXPIRATION: Joi.string().required(),
})

export default configSchema
