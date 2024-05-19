import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'

import { ClassConstructor, plainToInstance } from 'class-transformer'
import { map, Observable } from 'rxjs'

/**
 * Перехватчик трансформации данных
 */
@Injectable()
export class TransformDataInterceptor implements NestInterceptor {
  /**
   * Конструктор перехватчика трансформации данных
   * @param {any} classToUse Модель трансформации данных
   */
  constructor(private readonly classToUse: ClassConstructor<unknown>) {}

  /**
   * Перехват данных
   * @param {ExecutionContext} context Контекст выполнения запроса
   * @param {CallHandler} next Следующий вызов
   * @returns {Observable<unknown>} Наблюдаемый объект с трансформированными данными
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((data) => {
        return plainToInstance(this.classToUse, data)
      }),
    )
  }
}
