import { Restaurant } from '../../domain/models/restaurant'
import { RestaurantStatus } from '../../domain/models/restaurant-status'
import { RestaurantUseCase } from '../../domain/usecases/restaurant-usecase'
import { HttpClient } from '../protocols/http-client'

export class RestaurantService implements RestaurantUseCase {
  private readonly HOST: string = 'http://opentable.herokuapp.com/api'
  private readonly httpClientService: HttpClient

  constructor(httpClientService: HttpClient) {
    this.httpClientService = httpClientService
  }

  async load(): Promise<Array<Restaurant>> {
    const response = await this.httpClientService.send({method: 'GET', url: this.HOST + '/restaurants', params: { city: 'Toronto' }})
    const parseJson = response.body.map((restaurant: any): Restaurant => {
      const { postal_code, reserve_url, mobile_reserve_url, image_url, ...res} = restaurant
      return { ...res, postalCode: postal_code, reserveUrl: reserve_url, mobileReserveUrl: mobile_reserve_url, imageUrl: image_url }
    })
    return parseJson
  }

  async status(): Promise<RestaurantStatus> {
    const response = await this.httpClientService.send({ method: 'GET', url: this.HOST + '/stats' })
    return response.body
  }

}