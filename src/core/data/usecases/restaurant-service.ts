// import { Restaurant } from '../../domain/models/restaurant'
import { Restaurant } from '@/core/domain/models/restaurant'
import { RestaurantStats } from '@/core/domain/models/restaurant-stats'
import { HostConfig } from '@/core/domain/models/url-configuration'
import { RestaurantUseCase } from '@/core/domain/usecases/restaurant-usecase'
import { HttpClient } from '@/core/data/protocols/http-client'

export class RestaurantService implements RestaurantUseCase {
  private readonly host: HostConfig
  private readonly httpClientService: HttpClient

  constructor(host: HostConfig, httpClientService: HttpClient) {
    this.host = host
    this.httpClientService = httpClientService
  }

  async load(): Promise<Array<Restaurant>> {
    try {
      const response = await this.httpClientService.send({method: 'GET', url: this.host.URL.RESTAURANT, params: { city: 'Toronto' }})
      const parseJson = response.body.restaurants.map((restaurant: any): Restaurant => {
        const { postal_code, reserve_url, mobile_reserve_url, image_url, ...res} = restaurant
        return { ...res, postalCode: postal_code, reserveUrl: reserve_url, mobileReserveUrl: mobile_reserve_url, imageUrl: image_url }
      })
      return parseJson.slice(0, 5)
    } catch(error) {
      throw error
    }
  }

  async stats(): Promise<RestaurantStats> {
    try {
      const response = await this.httpClientService.send({ method: 'GET', url: this.host.URL.STATS })
      return response.body
    } catch (error) {
      throw error
    }
  }
}