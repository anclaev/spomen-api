export const serializeUser = <T, X>(account: T) =>
  ({
    ...account,
    password: undefined,
    refresh_tokens: undefined,
  }) as X
