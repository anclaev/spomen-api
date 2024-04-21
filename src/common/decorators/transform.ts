import { ClassConstructor } from 'class-transformer'
import { UseInterceptors } from '@nestjs/common'

import { TransformDataInterceptor } from '../interceptors/transform'

export const UseTransform = (classToUse: ClassConstructor<unknown>) =>
  UseInterceptors(new TransformDataInterceptor(classToUse))
