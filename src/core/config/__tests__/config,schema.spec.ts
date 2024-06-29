import configSchema from '../config.schema'

describe('ConfigSchema', () => {
  it('Должна возвращать схему конфигурации', () => {
    expect(configSchema).toBeDefined()
  })
})
