export interface DeleteManyResult {
  count: number
}

export type ToPrisma<T, D, R> = T & {
  select?: D | null
  include?: R | null
}
