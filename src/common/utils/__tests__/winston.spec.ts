import { winstonOptions } from '@utils/winston'

describe('Winston', () => {
  it('Должен быть определён', () => {
    expect(winstonOptions).toBeDefined()
  })
})
