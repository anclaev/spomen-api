import { UseUser } from '@decorators/user'

describe('UseUser', () => {
  it('Должен быть определён', () => {
    expect(UseUser()).toBeDefined()
  })
})
