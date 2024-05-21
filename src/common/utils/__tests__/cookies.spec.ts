import { Cookies, CookiesOptions } from '../cookies'

describe('Cookies', () => {
  const testOptions: CookiesOptions = {
    key: 'test',
    value: 'test',
    domain: 'localhost',
    path: '/',
  }

  it('Должен быть определён', () => {
    expect(new Cookies(testOptions)).toBeDefined()
  })

  it('Должен возвращать строку с куками', () => {
    expect(new Cookies(testOptions).toString()).toBe(
      'test=test; HttpOnly; Secure; Path=/;  Domain=localhost',
    )
  })
})
