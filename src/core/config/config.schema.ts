import { Permission } from '@graphql/index'
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
  MAX_REFRESH_TOKENS: Joi.number().default(10),
  SENTRY_DSN: Joi.string().required(),
  MINIO_ENDPOINT: Joi.string().default('localhost:9000'),
  MINIO_HOST: Joi.string().default('localhost'),
  MINIO_PORT: Joi.number().default(9000),
  MINIO_ACCESS_KEY: Joi.string().required(),
  MINIO_SECRET_KEY: Joi.string().required(),
  MINIO_BUCKET: Joi.string().default('spomen'),
  MINIO_BUCKET_PUBLIC: Joi.string().default('spomen-public'),
  MINIO_DEFAULT_ACL: Joi.string()
    .valid(
      Permission.Public,
      Permission.ChatOnly,
      Permission.MemoryOnly,
      Permission.TimelineOnly,
      Permission.OwnerOnly,
    )
    .default(Permission.Public),
})

export default configSchema
