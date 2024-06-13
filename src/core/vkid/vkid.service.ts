import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'

import { ConfigService } from '@core/config'

import {
  VK_API_RESPONSE,
  VKIDFactory,
  VKID_AUTH_RESPONSE,
  VKID_EXCHANGE_TOKEN_RESPONSE,
} from '@interfaces/vk-id'

@Injectable()
export class VKIDService {
  private factory: VKIDFactory

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.factory = new VKIDFactory({
      url: this.config.gett('VK_API_URL'),
      version: this.config.gett('VK_API_VERSION'),
      access: this.config.gett('VK_ID_ACCESS_KEY'),
      service: this.config.gett('VK_ID_SERVICE_KEY'),
    })
  }

  /**
   * Обмен silent- на access-токен VK ID
   * @param {VK_ID_AUTH_RESPONSE} payload Silent-токен и его uuid
   * @returns {VK_ID_EXCHANGE_TOKEN_RESPONSE} Данные access-токена
   */
  async exchangeToken(
    payload: VKID_AUTH_RESPONSE,
  ): Promise<VKID_EXCHANGE_TOKEN_RESPONSE> {
    let url = this.factory.getExchangeTokenUrl(payload)

    return firstValueFrom(
      this.http.get<VK_API_RESPONSE<VKID_EXCHANGE_TOKEN_RESPONSE>>(url.href),
    )
      .then(({ data }) => {
        if (data.error) {
          return data.error
        }

        return data.response
      })
      .catch((err) => err)
  }
}
