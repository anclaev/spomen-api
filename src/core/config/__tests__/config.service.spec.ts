import { Test, TestingModule } from '@nestjs/testing'
import { ConfigModule } from '@nestjs/config'

import { ConfigService } from '../config.service'

describe('ConfigService', () => {
  let service: ConfigService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [ConfigService],
    }).compile()

    service = module.get<ConfigService>(ConfigService)
  })

  it('Должен быть определён', () => {
    expect(service).toBeDefined()
  })

  it('Должен возвращать значение', () => {
    expect(service.gett('PORT')).toBeUndefined()
  })

  it('Должен возвращать флаг продакшена', () => {
    expect(service.isProduction).toBe(false)
  })

  it('Должен возвращать текущее окружение', () => {
    expect(service.environment).toBe('test')
  })

  it('Должен возвращать порт приложения', () => {
    expect(service.port).toBe(undefined)
  })
})
