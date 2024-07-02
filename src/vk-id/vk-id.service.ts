import { BadRequestException, Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'

import { ConfigService } from '@core/config'

import { VK_API } from '@enums/vk-api'

import {
  VK_API_RESPONSE,
  VKIDUser,
  VKID_OPTIONS,
  VKID_EXCHANGE_TOKEN_PAYLOAD,
  VKID_EXCHANGE_TOKEN_RESPONSE,
  VKID_USERS_GET_PAYLOAD,
  VKID_USERS_GET_RESPONSE,
} from '@interfaces/vk-id'

@Injectable()
export class VKIDService {
  private options: VKID_OPTIONS

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.options = {
      url: this.config.gett('VK_API_URL'),
      version: this.config.gett('VK_API_VERSION'),
      access: this.config.gett('VK_ID_ACCESS_KEY'),
      service: this.config.gett('VK_ID_SERVICE_KEY'),
    }
  }

  /**
   * Обмен silent- на access-токен VK ID
   * @param {VK_ID_AUTH_RESPONSE} payload Silent-токен и его uuid
   * @returns {VK_ID_EXCHANGE_TOKEN_RESPONSE} Данные access-токена
   */
  async exchangeToken({
    token,
    uuid,
  }: VKID_EXCHANGE_TOKEN_PAYLOAD): Promise<VKID_EXCHANGE_TOKEN_RESPONSE> {
    let url = `${this.options.url}${VK_API.EXCHANGE_SILENT_AUTH_TOKEN}?v=${this.options.version}&token=${token}&access_token=${this.options.service}&uuid=${uuid}`

    const res = await firstValueFrom(
      this.http.get<VK_API_RESPONSE<VKID_EXCHANGE_TOKEN_RESPONSE>>(url),
    ).then(({ data }) => data)

    if (res.error) {
      throw new BadRequestException(res.error)
    } else {
      return res.response
    }
  }

  /**
   * Получение пользователей VK ID по идентификаторам
   * @param {VKID_USERS_GET_PAYLOAD} payload Идентификаторы и поля пользователей
   * @returns {VKIDUser[]} Найденные пользователи VKID
   */
  async getVKIDUsers(payload: VKID_USERS_GET_PAYLOAD): Promise<VKIDUser[]> {
    const query = `user_ids=${payload.user_ids.join(',')}&fields=${payload.fields.join(',')}&access_token=${payload.access_token}`

    const res = await firstValueFrom(
      this.http.get<VK_API_RESPONSE<VKID_USERS_GET_RESPONSE>>(
        `${this.options.url}${VK_API.USERS_GET}?v=${this.options.version}&${query}`,
      ),
    ).then(({ data }) => data)

    if (res.error) {
      throw new BadRequestException(res.error)
    } else {
      return res.response
    }
  }
}
