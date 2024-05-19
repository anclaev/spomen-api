import { ClassConstructor } from 'class-transformer'
import { UseInterceptors } from '@nestjs/common'

import { TransformDataInterceptor } from '../interceptors/transform'

/**
 * Декоратор трансформации ответа
 * @description Подключает перехватчик с трасформацией данных
 * @param {any} classToUse Класс для трансфорации данных
 */
export const UseTransform = (classToUse: ClassConstructor<unknown>) =>
  UseInterceptors(new TransformDataInterceptor(classToUse))
